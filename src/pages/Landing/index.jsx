import * as classes from "./Landing.module.css";

// Global Components
import Container from "~/src/components/shared/container";

// Local Components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const LandingPage = () => {
  return (
    <Container className={classes["landing-page"]}>
      <Hero />
      <Skills />
      {/* <Projects /> */}
    </Container>
  );
};

export default LandingPage;
