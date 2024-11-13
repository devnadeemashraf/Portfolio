import { memo } from "react";
import * as classes from "../Hero.module.css";

const SummaryHighlight = ({ children }) => {
  return (
    <span className={classes["hero-main--summary-highlight"]}>{children}</span>
  );
};

export default memo(SummaryHighlight);
