import React from "react";

const SemiCircularChart = ({ stats }) => {
  const { total, easy, medium, hard } = stats;

  // Calculate angles based on the stats
  const easyAngle = (easy / total) * 180; // 180 degrees for half-circle
  const mediumAngle = (medium / total) * 180;
  const hardAngle = (hard / total) * 180;

  // Calculate the path for each arc (using SVG path and "arc" math)
  const radius = 50; // radius of the semi-circle
  const center = 60; // center of the circle (for positioning)
  const strokeWidth = 20; // width of the arc
  const arcLength = 180; // total arc length is half a circle (180 degrees)

  const getArcPath = (startAngle, endAngle) => {
    const startX =
      center + radius * Math.cos((startAngle - 90) * (Math.PI / arcLength));
    const startY =
      center + radius * Math.sin((startAngle - 90) * (Math.PI / arcLength));

    const endX =
      center + radius * Math.cos((endAngle - 90) * (Math.PI / arcLength));
    const endY =
      center + radius * Math.sin((endAngle - 90) * (Math.PI / arcLength));

    const largeArcFlag = endAngle - startAngle <= arcLength ? "0" : "1";

    return `
      M ${center} ${center}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      L ${center} ${center}
    `;
  };

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Easy Arc */}
      <path
        d={getArcPath(0, easyAngle)}
        fill="none"
        stroke="#4caf50"
        strokeWidth={strokeWidth}
      />

      {/* Medium Arc */}
      <path
        d={getArcPath(easyAngle, easyAngle + mediumAngle)}
        fill="none"
        stroke="#ff9800"
        strokeWidth={strokeWidth}
      />

      {/* Hard Arc */}
      <path
        d={getArcPath(
          easyAngle + mediumAngle,
          easyAngle + mediumAngle + hardAngle
        )}
        fill="none"
        stroke="#f44336"
        strokeWidth={strokeWidth}
      />

      {/* Circle Center */}
      <circle cx="60" cy="60" r="30" fill="#fff" />

      {/* Total Problems Solved Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fill="#333"
      >
        {total} Solved
      </text>
    </svg>
  );
};

export default SemiCircularChart;
