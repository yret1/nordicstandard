import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Inleed = () => {
  const controls = useAnimation();

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (sectionInView) {
      controls.start("visible");
    }
  }, [controls, sectionInView]);

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-screen bg-white p-6 flex flex-col gap-10 justify-center items-center">
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        ref={sectionRef}
        className="font-bold w-11/12 md:w-10/12 lg:w-8/12 pt-20 pb-20 text-black font-poppins text-center text-2xl md:text-4xl lg:text-5xl"
      >
        Vi har hatt flere{" "}
        <span className="text-blue-700 text-3xl md:text-5xl lg:text-7xl">
          100-tals
        </span>{" "}
        fornøyde gjester som har bodd i våre forvaltede boliger!
      </motion.h2>
    </section>
  );
};

export default Inleed;
