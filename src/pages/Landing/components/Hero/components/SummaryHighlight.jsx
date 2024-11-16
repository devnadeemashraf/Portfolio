import * as classes from "../Hero.module.css";

import { memo } from "react";

const SummaryHighlight = ({ children }) => {
  return (
    <span className={classes["hero-main--summary-highlight"]}>{children}</span>
  );
};

export default memo(SummaryHighlight);
