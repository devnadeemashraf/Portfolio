import * as classes from "./Footer.module.css";

import { memo } from "react";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <a href="https://github.com/devnadeemashraf/Portfolio" target="_blank">
        <span>Source Code</span>
      </a>
    </footer>
  );
};

export default memo(Footer);
