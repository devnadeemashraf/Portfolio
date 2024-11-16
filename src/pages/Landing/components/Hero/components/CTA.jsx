import * as classes from "../Hero.module.css";

import config from "~/src/config";
import withDownloads from "~/src/hoc/withDownloads";

import ResumeButton from "./ResumeButton";

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
