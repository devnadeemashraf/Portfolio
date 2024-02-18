import React from "react";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type TSkillCard = {
  title: string;
  srcURL: string;
  content: string;
};

const SkillCard = ({ title, srcURL, content }: TSkillCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-end gap-2">
          <Image src={srcURL} alt={`${title}-icon`} width={32} height={32} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default SkillCard;
