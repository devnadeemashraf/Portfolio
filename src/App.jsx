import { Analytics } from "@vercel/analytics/react";

import Header from "~/src/components/shared/header";
import Footer from "~/src/components/shared/footer";

import LandingPage from "~/src/pages/Landing";

const App = () => {
  return (
    <>
      <Header />
      {/* 
        Will Have my Router Here in Future instead of the Multiple Pages
        */}
      <LandingPage />
      <Footer />

      <Analytics />
    </>
  );
};

export default App;
