import * as classes from "../Skills.module.css";

import Card from "~/src/components/shared/Card";

import LCProgressChart from "./LCProgressChart";
import LCBreakdown from "./LCBreakdown";

// Dev: Test Code
import config from "~/src/config";
import { useState } from "react";

// This will come via API Later On
const stats = config["resumeInfo"]["leetcodeStats"];

const DSAStats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState([]);
  // Add in API Support for LC Stats
  return (
    <Card className={classes["skills--dsa-stats"]}>
      <div>
        <LCProgressChart stats={stats} />
      </div>
      <LCBreakdown stats={stats} />
    </Card>
  );
};

export default DSAStats;
