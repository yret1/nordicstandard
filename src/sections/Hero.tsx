import LandingVideo from "../assets/Landing.mp4";
import Arrow from "../assets/Arrowdown.svg";
import Arrowb from "../assets/Arrowdownb.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-[url('./assets/NorwayDesktop.png')] bg-cover"
      aria-label="Home Section"
    >
      <video
        autoPlay
        controls={false}
        muted
        className="w-full h-full object-cover absolute top-0 left-0"
        aria-label="Background Video"
      >
        <source src={LandingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section
        className="w-full h-full flex justify-center items-center md:justify-center md:items-center bg-black bg-opacity-45 absolute top-0 pb-20 p-5 md:p-10 left-0"
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
            className="text-herohead text-center font-bold text-4xl font-poppins md:text-5xl lg:text-6xl md:drop-shadow-lg"
            aria-label="Main Heading"
          >
            Din Utleiepartner
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
            className="text-herosub font-medium text-center text-lg md:text-xl lg:text-2xl font-poppins"
            aria-label="Subheading"
          >
            Vi frigjør din viktigste resurs, din tid.
          </motion.p>
          <motion.a
            href="/#reach"
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
