//import LandingVideo from "../assets/Landing.mp4";
import v1 from "../assets/v1.avif";
import v2 from "../assets/v2.avif";
// import v3 from "../assets/v3.avif";
import v4 from "../assets/v4.avif";
import Arrow from "../assets/Arrowdown.svg";
import Arrowb from "../assets/Arrowdownb.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [v2, v1, v4];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to the next image, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="home"
      className="w-screen h-screen bg-cover overflow-hidden"
      aria-label="Home Section"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
         alt="Korttidsutleie og utleieforvaltning av leilighet i Oslo – Nordisk Standard"
          className={`w-full h-full object-cover absolute scale-125 top-0 left-0 inset-0 transition-opacity duration-1000 transform ${
            index === currentIndex
              ? "opacity-100 animate-slide-in"
              : "opacity-0"
          }`}
        />
      ))}
      {/** 
        <video
          autoPlay
          controls={false}
          muted
          loop
          ref={videoRef}
          className="w-full h-full object-cover absolute top-0 left-0"
          aria-label="Background Video"
        >
          <source src={LandingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      */}
      <section
        className="w-full h-full flex justify-center items-center md:justify-center md:items-center bg-transparent opacity-100 absolute top-0 pb-20 p-5 md:p-10 left-0"
        aria-label="Overlay Section"
      >
        <section
          className="flex flex-col gap-4 md:gap-6 justify-start md:justify-center items-center"
          aria-label="Hero Content"
        >
          <motion.h2
            layout
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.2, ease: "anticipate" }}
            className="text-herohead text-center font-bold text-4xl font-comorant md:text-5xl lg:text-6xl drop-shadow-xl"
            aria-label="Main Heading"
          >
            Profesjonell korttidsutleie av leilighet i Oslo med full utleieforvaltning og økt inntektspotensial
          </motion.h2>
          <motion.p
            layout
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.3, ease: "anticipate" }}
            className="text-herosub font-medium text-center text-lg md:text-xl lg:text-2xl font-infant drop-shadow-xl"
            aria-label="Subheading"
          >
            Nordisk Standard tilbyr komplett utleieforvaltning i Oslo. Vi håndterer hele prosessen for deg, fra annonsering og prisoptimalisering til gjestekommunikasjon og drift, slik at du oppnår best mulig inntekt med minimal innsats og full fleksibilitet som boligeier.
          </motion.p>
          <motion.a
            href="/#services"
            className="w-full flex justify-center text-herosub absolute p-4 bottom-8 animate-bounce items-center md:mt-8"
            aria-label="Scroll Down Link"
          >
            <section
              className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center group bg-transparent rounded-full hover:bg-white transition-all"
              aria-label="Scroll Down Button"
            >
              <img
                src={Arrow}
                alt="Arrow"
                className="w-8 h-8 md:w-12 md:h-12 group-hover:hidden"
                aria-hidden="true"
              />
              <img
                src={Arrowb}
                alt="Arrow"
                className="w-8 h-8 md:w-12 md:h-12 group-hover:block hidden"
                aria-hidden="true"
              />
            </section>
          </motion.a>
        </section>
      </section>
    </section>
  );
};

export default Hero;
