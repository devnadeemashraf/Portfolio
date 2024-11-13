import * as classes from "../Hero.module.css";

import ResumeButton from "./ResumeButton";

import { config, withDownloads } from "../imports";

const ResumeButtonWithDownloads = withDownloads(ResumeButton, {
  file: config.assets.resumeURL,
  fileName: "Nadeem_Ashraf__Resume.pdf",
});

const CTA = () => {
  return (
    <div className={classes["hero-cta"]}>
      <ResumeButtonWithDownloads />
    </div>
  );
};

export default CTA;
