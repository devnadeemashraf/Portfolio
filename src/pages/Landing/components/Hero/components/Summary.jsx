import * as classes from "../Hero.module.css";

import { memo } from "react";

import { getTimeElapsedInYears } from "~/src/lib/utils";

import SummaryHighlight from "./SummaryHighlight";

const Summary = () => {
  return (
    <span className={classes["hero-main--summary"]}>
      ... a Software Developer from India with&nbsp;
      <SummaryHighlight>{getTimeElapsedInYears(2021)}+ Years</SummaryHighlight>
      &nbsp;of experience in&nbsp;
      <SummaryHighlight>JavaScript, TypeScript</SummaryHighlight>
      &nbsp;and&nbsp;
      <SummaryHighlight>Python</SummaryHighlight>.<br /> Skilled in building
      scalable, high-quality products, handling Clients and leading Teams.
    </span>
  );
};

export default memo(Summary);
