import React from "react";

const Navlinks = ({ text }: { text: string }) => {
  return (
    <span className="lowercase text-sm md:text-xs anim_underline">{text}</span>
  );
};

export default Navlinks;
