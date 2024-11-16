import * as classes from "../Hero.module.css";

import { memo } from "react";

const SummaryHighlight = ({ children }) => {
  return <span>{children}</span>;
};

export default memo(SummaryHighlight);
