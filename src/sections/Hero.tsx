import LandingVideo from "../assets/Landing.mp4";
import Arrow from "../assets/Arrowdown.svg";
import Arrowb from "../assets/Arrowdownb.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-[url('./assets/NorwayDesktop.png')] bg-cover"
    >
      <video
        autoPlay
        controls={false}
        muted
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src={LandingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="w-full h-full flex justify-center items-center md:justify-center md:items-center bg-black bg-opacity-45 absolute top-0 pb-20 p-5 md:p-10 left-0">
        <section className="flex flex-col gap-4 md:gap-6 justify-start md:justify-center items-center">
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
            className="text-white text-center font-bold text-4xl font-poppins md:text-5xl lg:text-6xl md:drop-shadow-lg"
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
            className="text-white font-medium text-center text-lg md:text-xl lg:text-2xl font-poppins"
          >
            Vi frigjør din viktigste resurs, din tid.
          </motion.p>
          <motion.a
            href="/#reach"
            className="w-full flex justify-center text-white absolute p-4  bottom-8 animate-bounce items-center md:mt-8"
          >
            <section className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center group bg-transparent rounded-full hover:bg-white transition-all">
              <img
                src={Arrow}
                alt="Arrow"
                className="w-8 h-8 md:w-12 md:h-12 group-hover:hidden"
              />
              <img
                src={Arrowb}
                alt="Arrow"
                className="w-8 h-8 md:w-12 md:h-12 group-hover:block hidden"
              />
            </section>
          </motion.a>
        </section>
      </section>
    </section>
  );
};

export default Hero;
