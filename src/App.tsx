import Header from "./components/Header";
import CookieConsent from "react-cookie-consent";
import Hero from "./sections/Hero";
import Inleed from "./sections/Inleed";
import Kontakt from "./sections/Kontakt";
import Reach from "./sections/Reach";
import Services from "./sections/Services";
import Stats from "./sections/Stats";

import Socialproof from "./sections/Socialproof";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Inleed />
      <Reach />

      <Socialproof />

      <Services />

      <Stats />

      <Kontakt />

      <CookieConsent
        location="bottom"
        buttonText="No problem!"
        style={{ background: "white", color: "black" }}
        acceptOnScroll={true}
        buttonStyle={{
          color: "white",
          fontSize: "13px",
          padding: "10px 20px",
          background: "#1d4ed8",
          borderRadius: "5px",
          fontFamily: "Poppins",
        }}
        expires={150}
      >
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
      </CookieConsent>
    </>
  );
}

export default App;
