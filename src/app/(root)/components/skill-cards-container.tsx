import React from "react";
import SkillCard, { TSkillCard } from "./skill-card";

type SkillCardsContainerProps = {
  skills: TSkillCard[];
};

const SkillCardsContainer = ({ skills }: SkillCardsContainerProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
      {skills.map(({ title, srcURL, content }, index) => {
        return (
          <SkillCard
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

export default SkillCardsContainer;
