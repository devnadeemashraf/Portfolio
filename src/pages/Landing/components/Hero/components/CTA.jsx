import * as classes from "../Hero.module.css";

import DownloadResumeButton from "./DownloadResumeButton";

const CTA = () => {
  return (
    <div className={classes["hero-cta"]}>
      <DownloadResumeButton />
    </div>
  );
};

export default CTA;
