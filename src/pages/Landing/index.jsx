import * as classes from "./Landing.module.css";

import Container from "../../components/shared/container";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const LandingPage = () => {
  return (
    <Container className={classes["landing-page"]}>
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
};

export default LandingPage;
