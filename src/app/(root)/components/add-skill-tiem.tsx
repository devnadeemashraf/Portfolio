import React from "react";
import Image from "next/image";

import { TSkillCard } from "./skill-card";

const AdditionalSkillitem = ({ title, srcURL }: TSkillCard) => {
  return <Image src={srcURL} alt={`${title}-icon`} width={48} height={48} />;
};

export default AdditionalSkillitem;
