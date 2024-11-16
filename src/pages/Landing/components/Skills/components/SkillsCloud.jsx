import * as classes from "../Skills.module.css";

import Card from "~/src/components/shared/Card";

import SkillsItem from "./SkillsItem";

import config from "~/src/config";

const SkillsCloud = () => {
  return (
    <Card className={classes["skills--skills-cloud"]}>
      {config["resumeInfo"]["skills"].map((skill) => {
        return <SkillsItem name={skill["name"]} exp={skill["exp"]} />;
      })}
    </Card>
  );
};

export default SkillsCloud;
