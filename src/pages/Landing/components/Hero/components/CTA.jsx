import * as classes from "../Hero.module.css";

import config from "~/src/config";
import withDownloads from "~/src/hoc/withDownloads";

import ResumeButton from "./ResumeButton";

const ResumeButtonWithDownloads = withDownloads(ResumeButton, {
  link: config.assets.resumeURL,
  downloadedFileName: "Nadeem_Ashraf_SDE_Resume.pdf",
});

const CTA = () => {
  return (
    <div className={classes["hero-cta"]}>
      <ResumeButtonWithDownloads />
    </div>
  );
};

export default CTA;
