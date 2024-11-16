import * as classes from "./Hero.module.css";

// Global Components
import Container from "~/src/components/shared/container";

// Local Components
import Greetings from "./components/Greetings";
import Summary from "./components/Summary";
import CTA from "./components/CTA";

const Hero = () => {
  return (
    <Container type="section" id="hero" className={classes["hero"]}>
      <div className={classes["hero-main"]}>
        <Greetings />
        <Summary />
      </div>
      <CTA />
    </Container>
  );
};

export default Hero;
