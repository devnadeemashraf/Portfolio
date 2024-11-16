import { Analytics } from "../node_modules/@vercel/analytics/dist/react/index.mjs";

import Header from "~/src/components/shared/header";
import Footer from "~/src/components/shared/footer";

import LandingPage from "~/src/pages/Landing";

const App = () => {
  return (
    <>
      <Analytics />

      <Header />
      {/* 
        Will Have my Router Here in Future instead of the Multiple Pages
        */}
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
