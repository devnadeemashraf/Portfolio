import * as classes from "./Footer.module.css";

import { memo } from "react";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <span>Work In Progress...</span>

      <span>&nbsp; | &nbsp;</span>

      <a href="https://github.com/devnadeemashraf/Portfolio" target="_blank">
        <span>Source Code</span>
      </a>
    </footer>
  );
};

export default memo(Footer);
