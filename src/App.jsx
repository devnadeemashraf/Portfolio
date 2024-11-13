import Container from "./components/shared/container";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

import LandingPage from "./pages/Landing";

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
