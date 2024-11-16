import * as classes from "./Skills.module.css";

import Container from "~/src/components/shared/container";

import DSAStats from "./components/DSAStats";
import SkillsCloud from "./components/SkillsCloud";

const Skills = () => {
  return (
    <Container type="section" id="skills" className={classes["skills"]}>
      {/* DSA Stats */}
      <DSAStats />

      {/* Skills Cloud */}
      <SkillsCloud />
    </Container>
  );
};

export default Skills;
