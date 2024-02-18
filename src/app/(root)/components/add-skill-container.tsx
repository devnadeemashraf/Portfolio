import React from "react";
import AdditionalSkillitem from "./add-skill-tiem";
import { TSkillCard } from "./skill-card";

type AdditionalSkillsContainerProps = {
  skills: TSkillCard[];
};

const AdditionalSkillsContainer = ({
  skills,
}: AdditionalSkillsContainerProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-4 mt-6 flex-wrap">
      {skills.map(({ title, srcURL, content }, index) => {
        return (
          <AdditionalSkillitem
            key={index}
            title={title}
            srcURL={srcURL}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default AdditionalSkillsContainer;
