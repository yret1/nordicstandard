import Header from "./components/Header";
// import CookieConsent from "react-cookie-consent";
import Hero from "./sections/Hero";
import Kontakt from "./sections/Kontakt";

import Services from "./sections/Services";

import Socialproof from "./sections/Socialproof";
import About from "./sections/About";
import Vision from "./sections/Vision";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <section className="w-screen overflow-x-hidden">
        <Header />
        <Hero />
        <Services />

        <Socialproof />

        <section className="w-screen h-60 bg-bottom bg-topYellow bg-cover"></section>
        <Vision />
        <section className="w-screen h-40 lg:h-60 bg-botYellow bg-top bg-cover"></section>

        <About />

        <Kontakt />

        <Footer />

        {/* <CookieConsent
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
        </CookieConsent>*/}
      </section>
    </>
  );
}

export default App;
