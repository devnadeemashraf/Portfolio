import Container from "~/src/components/shared/container";
import Header from "~/src/components/shared/header";
import Footer from "~/src/components/shared/footer";

import LandingPage from "~/src/pages/Landing";

const App = () => {
  return (
    <Container type="div">
      <Header />
      {/* 
        @devnadeemasraf - Will Have my Router Here in Future instead of the LandingPage
        */}
      <LandingPage />
      <Footer />
    </Container>
  );
};

export default App;
