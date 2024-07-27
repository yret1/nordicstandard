import LandingVideo from "../assets/Landing.mp4";

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
            className="text-white text-center font-bold text-5xl font-poppins md:text-6xl lg:text-8xl md:drop-shadow-lg"
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
            className="text-white font-medium text-center text-2xl md:text-4xl lg:text-4xl font-poppins"
          >
            Vi frigjør din viktigste resurs, din tid.
          </motion.p>
          <motion.a
            href="/#reach"
            className="w-full flex justify-center items-center md:mt-8"
          >
            <motion.button
              layout
              initial={{
                opacity: 0,
                width: "auto",
                backdropFilter: "blur(0px)",
              }}
              animate={{
                opacity: 1,
                width: "100%",
                backdropFilter: "blur(10px)",
              }}
              transition={{ delay: 0.5, ease: "anticipate" }}
              className="text-white text-nowrap w-full bg-transparent rounded-md mt-6 font-poppins backdrop-blur-sm p-4 border-2  md:hover:font-bold md:hover:scale-110 transition-all duration-300"
            >
              Finne ut mer
            </motion.button>
          </motion.a>
        </section>
      </section>
    </section>
  );
};

export default Hero;
