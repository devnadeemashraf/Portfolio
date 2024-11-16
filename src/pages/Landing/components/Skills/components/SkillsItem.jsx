import * as classes from "../Skills.module.css";

import { memo } from "react";

const SkillsItem = ({ name, exp }) => {
  return <span className={classes["skills--skills-cloud--item"]}>{name}</span>;
};

export default memo(SkillsItem);
