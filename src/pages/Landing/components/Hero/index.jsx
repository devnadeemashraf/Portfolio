import * as classes from "./Hero.module.css";

import { Container, getTimeElapsedInYears } from "../imports";

import DownloadResumeButton from "./components/DownloadResumeButton";
import ContactMeButton from "./components/ContactMeButton";

const Hero = () => {
  return (
    <Container type="section" id="hero" className={classes["hero"]}>
      <h1>Hi, I'm Nadeem</h1>
      <p>
        A Software Developer, based in India, with over{" "}
        {getTimeElapsedInYears(2021)} Years of experience with expertise in
        JavaScript/TypeScript, Python and its associated frameworks, capable of
        handling customers and teams and delivering exceptional quality products
        at scale.
      </p>
      <div className={classes["hero-cta"]}>
        <DownloadResumeButton />
        <ContactMeButton />
      </div>
    </Container>
  );
};

export default Hero;
