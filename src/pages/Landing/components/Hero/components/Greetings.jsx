import * as classes from "../Hero.module.css";

import { memo } from "react";

const Greetings = () => {
  return (
    <h1 className={classes["hero-main--greetings"]}>
      <span className={classes["hero-main--greetings--blur"]}>Hi, I'm</span>
      &nbsp;
      <span>Nadeem</span>
      &nbsp;
      <span className={classes["hero-main--greetings--blur"]}>...</span>
    </h1>
  );
};

export default memo(Greetings);
