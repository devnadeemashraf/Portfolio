import * as classes from "../Skills.module.css";

import { memo } from "react";

const LCBreakdown = ({ stats }) => {
  return (
    <div className={classes["skills--dsa-stats--lc-breakdown"]}>
      {/* Easy */}
      <div className={classes["skills--dsa-stats--lc-breakdown-item"]}>
        <span className={classes["skills--dsa-stats--lc-breakdown-item--easy"]}>
          Easy
        </span>
        <span>
          <span>120</span>
          <span>/</span>
          <span>240</span>
        </span>
      </div>
      {/* Medium */}
      <div className={classes["skills--dsa-stats--lc-breakdown-item"]}>
        <span
          className={classes["skills--dsa-stats--lc-breakdown-item--medium"]}
        >
          Med.
        </span>
        <span>
          <span>120</span>
          <span>/</span>
          <span>240</span>
        </span>
      </div>
      {/* Hard */}
      <div className={classes["skills--dsa-stats--lc-breakdown-item"]}>
        <span className={classes["skills--dsa-stats--lc-breakdown-item--hard"]}>
          Hard
        </span>
        <span>
          <span>120</span>
          <span>/</span>
          <span>240</span>
        </span>
      </div>
    </div>
  );
};

export default memo(LCBreakdown);
