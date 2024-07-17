import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Howbox from "../components/Howbox";

import Kontakt from "../components/Kontakt";
const Motivator = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ color: "Blue", fontSize: "2.5rem" });
    } else {
      controls.start({ color: "black", scale: 1 });
    }
  }, [controls, inView]);
  return (
    <section
      id="erfaring"
      className="w-screen min-h-96 flex gap-20 pt-20 flex-col justify-center items-center relative bg-cover bg-bottom bg-topWave pb-32"
    >
      <p className="text-black font-bold font-poppins text-center md:text-center text-4xl">
        Vi har hatt flere{" "}
        <motion.span
          animate={controls}
          initial={{ color: "black", fontSize: "1rem" }}
          transition={{ duration: 0.3 }}
          ref={ref}
        >
          100-tals
        </motion.span>{" "}
        fornøyde gjester som har bodd i våre forvaltede boliger
      </p>

      <section className="w-screen flex flex-col justify-start items-center">
        <section>
          <p className="font-bold text-black text-2xl md:text-5xl pb-6">
            Hvordan virker det?
          </p>
        </section>

        <section className="w-screen flex flex-col md:flex-row min-h-[600px] justify-center items-center gap-2 md:gap-6">
          <Howbox version="1" />
          <Howbox version="2" />
          <Howbox version="3" />
        </section>
      </section>
      <Kontakt />
    </section>
  );
};

export default Motivator;
