import React from "react";

import SkillCardsContainer from "@/app/(root)/components/skill-cards-container";

import { additionalSkillsList, skillsList } from "@/constants";
import AdditionalSkillsContainer from "../components/add-skill-container";

const SkillsSection = () => {
  return (
    <section className="w-full h-auto flex flex-col items-start justify-start py-4 pb-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Skills
      </h2>

      <SkillCardsContainer skills={skillsList} />
      <AdditionalSkillsContainer skills={additionalSkillsList} />
    </section>
  );
};

export default SkillsSection;
