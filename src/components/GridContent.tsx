import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GridContentProps {
  goal?: string;
  title: string;
  desc: string;
  desc2?: string;
  dataone?: {
    data: string;
    value: string;
  };
  datatwo?: {
    data: string;
    value: string;
  };
  buttonText?: string;
  href: string;
}

const GridContent: React.FC<GridContentProps> = ({
  title,
  desc,
  desc2,
  goal,
  dataone,
  datatwo,
  buttonText,
  href,
}) => {
  const controls = useAnimation();
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // animation triggers only once
    threshold: 0.2, // triggers when 10% of the component is in view
  });

  const [target, setTarget] = useState<string>("");

  useEffect(() => {
    if (title == "Superhost!") {
      setTarget("_blank");
    } else {
      setTarget("");
    }

    if (sectionInView) {
      controls.start("visible");
    }
  }, [controls, sectionInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`w-full h-full flex flex-col ${
        title == "Superhost!" ? "justify-between" : "justify-start"
      } items-center px-4 z-10`}
      ref={sectionRef}
    >
      {goal && (
        <motion.section className="flex justify-start items-start w-full pb-6">
          <motion.p
            className="text-optext font-bold font-comorant text-xl text-opacity-35"
            variants={itemVariants}
          >
            {goal}
          </motion.p>
        </motion.section>
      )}

      <motion.section
        className="w-full flex flex-col justify-start items-start"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.p
          className="font-bold text-contact font-comorant text-5xl pb-5"
          variants={itemVariants}
        >
          {title}
        </motion.p>
        <motion.p
          className="text-sub font-infant text-sm md:text-lg lg:text-2xl"
          variants={itemVariants}
        >
          {desc}
          {desc2 && <br />}
          {desc2 && <br />}
          {desc2}
        </motion.p>
      </motion.section>

      {(dataone || datatwo) && (
        <>
          <motion.section
            className="flex justify-center items-center gap-6 p-6"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {dataone && (
              <motion.div
                className="opacity-100 text-center"
                variants={itemVariants}
              >
                <p className="font-bold text-accent text-4xl">{dataone.data}</p>
                <p className="font-bold text-accent text-4xl">
                  {dataone.value} +
                </p>
              </motion.div>
            )}
            {datatwo && (
              <motion.div
                className="opacity-100 text-center"
                variants={itemVariants}
              >
                <p className="font-bold text-accent text-4xl">{datatwo.data}</p>
                <p className="font-bold text-accent text-4xl">
                  {datatwo.value} +
                </p>
              </motion.div>
            )}
          </motion.section>
        </>
      )}

      {buttonText && (
        <motion.section
          className="flex justify-start w-full gap-6 py-6"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.a
            href={href}
            referrerPolicy="no-referrer"
            target={target}
            variants={itemVariants}
          >
            <button className="py-2 px-4  rounded-lg bg-cardbg  shadow-lg hover:bg-contact hover:text-herosub text-sub transition-all duration-100">
              <p className=" font-medium font-infant text-2xl">{buttonText}</p>
            </button>
          </motion.a>
        </motion.section>
      )}
    </motion.section>
  );
};

export default GridContent;
