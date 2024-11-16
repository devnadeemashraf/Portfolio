import React, { useEffect, useState, useMemo, useCallback } from "react";

const LCProgressChart = ({ stats }) => {
  const [progress, setProgress] = useState(stats.map(() => 0));
  const [scaleBase, setScaleBase] = useState(2);

  // Scalability on viewport width below 768px

  // Memoize constants and calculations that don't depend on state
  const chartConstants = useMemo(() => {
    const size = 120 * scaleBase;
    const center = size / 2;
    const radius = 40 * scaleBase;
    const strokeWidth = 6 * scaleBase;
    const sectionGap = 12 * scaleBase;
    const fontSize = Math.floor(radius * 0.25);

    return {
      base: scaleBase,
      size,
      center,
      radius,
      strokeWidth,
      sectionGap,
      fontSize,
      gapAngle: (sectionGap * 360) / (2 * Math.PI * radius),
    };
  }, [scaleBase]);

  // Memoize total calculations
  const totals = useMemo(() => {
    const totalProblems = stats.reduce((sum, stat) => sum + stat.total, 0);
    const totalSolved = stats.reduce((sum, stat) => sum + stat.progress, 0);
    const totalAngle = 360 - chartConstants.gapAngle * stats.length;

    return { totalProblems, totalSolved, totalAngle };
  }, [stats, chartConstants.gapAngle]);

  // Memoize colors to prevent unnecessary recreations
  const colors = useMemo(
    () => ({
      easy: { bg: "#1BA79433", progress: "#1BA794" },
      medium: { bg: "#FFA11633", progress: "#FFA116" },
      hard: { bg: "#ED434333", progress: "#ED4343" },
    }),
    []
  );

  // Memoize helper functions
  const polarToCartesian = useCallback(
    (angle) => {
      const { center, radius } = chartConstants;
      const angleInRadians = ((angle - 90) * Math.PI) / 180.0;
      return {
        x: center + radius * Math.cos(angleInRadians),
        y: center + radius * Math.sin(angleInRadians),
      };
    },
    [chartConstants]
  );

  const createArc = useCallback(
    (startAngle, endAngle) => {
      const { radius } = chartConstants;
      const start = polarToCartesian(startAngle);
      const end = polarToCartesian(endAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      return [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        1,
        end.x,
        end.y,
      ].join(" ");
    },
    [chartConstants, polarToCartesian]
  );

  const calculateStrokeDasharray = useCallback(
    (startAngle, endAngle) => {
      const { radius } = chartConstants;
      const arcLength = ((endAngle - startAngle) * (Math.PI * radius)) / 180;
      return `${arcLength} ${2 * Math.PI * radius}`;
    },
    [chartConstants]
  );

  // Memoize sections calculation
  const sections = useMemo(() => {
    let currentAngle = 0;
    return stats.map((stat) => {
      const sectionAngle =
        (stat.total / totals.totalProblems) * totals.totalAngle;
      const progressAngle = (stat.progress / stat.total) * sectionAngle;

      const section = {
        startAngle: currentAngle,
        endAngle: currentAngle + sectionAngle,
        progressEndAngle: currentAngle + progressAngle,
        ...stat,
      };

      currentAngle += sectionAngle + chartConstants.gapAngle;
      return section;
    });
  }, [stats, totals, chartConstants.gapAngle]);

  // Scale the Chart on Viewport Adjustment
  // TODO: Debounce the Resize to make it more efficient
  const handleOnWindowResize = useCallback((e) => {
    if (e["target"]["innerWidth"] < 800) {
      setScaleBase(1.5);
    } else {
      setScaleBase(2);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(stats.map((stat) => stat.progress));
    }, 100);
    return () => clearTimeout(timer);
  }, [stats]);

  // Resize Event Listener on the Window Object
  useEffect(() => {
    window.addEventListener("resize", handleOnWindowResize);

    return () => window.removeEventListener("resize", handleOnWindowResize);
  }, []);

  const { size, center, strokeWidth, fontSize } = chartConstants;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Center Text */}
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontSize={fontSize}
        className="font-medium"
      >
        {`${totals.totalSolved}/${totals.totalProblems}`}
      </text>

      <g transform={`rotate(-90 ${center} ${center})`}>
        {sections.map((section, index) => (
          <g key={`section-${section.id}`}>
            {/* Background arc */}
            <path
              d={createArc(section.startAngle, section.endAngle)}
              fill="none"
              stroke={colors[section.id].bg}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            {/* Progress arc */}
            <path
              d={createArc(section.startAngle, section.endAngle)}
              fill="none"
              stroke={colors[section.id].progress}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={calculateStrokeDasharray(
                section.startAngle,
                section.endAngle
              )}
              strokeDashoffset={
                (1 - progress[index] / section.total) *
                calculateStrokeDasharray(
                  section.startAngle,
                  section.endAngle
                ).split(" ")[0]
              }
              style={{
                transition:
                  "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default React.memo(LCProgressChart);
