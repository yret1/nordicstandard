import MenuIcon from "../assets/Menu.svg";
import CloseIcon from "../assets/Cross.svg";
import ArrowIcon from "../assets/Arrow.svg";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const staggerVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  const links = [
    {
      text: "Erfaring Og Meriter",
      description: "Se våre meriter og erfaring. Våre kunder er mycket nöjda!",
    },
    {
      text: "Om Oss",
      description:
        "Läs om oss och vår historia. Se vem som står bakom företaget!",
    },
    {
      text: "Tjenester",
      description:
        "Se våra tjänster och vad vi kan erbjuda dig och din verksamhet!",
    },
    {
      text: "Kontakt",
      description:
        "Kontakta oss för mer information. Vi svarar inom 24 timmar!",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="w-screen h-12 z-20 flex-col gap-5 justify-center hidden md:flex items-center absolute top-0 left-0 bg-transparent p-10">
        <section className="flex justify-center items-center px-5 pt-12 w-full">
          <h1 className="text-white font-bold text-4xl text-nowrap hidden md:block">
            Nordisk Standard
          </h1>
        </section>
        <section>
          <ul className="w-full justify-center flex items-center gap-5">
            <li className="cursor-pointer text-[12px] md:text-lg text-nowrap text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
              Erfaring Og Meriter
            </li>
            <li className="cursor-pointer text-[12px] md:text-lg text-nowrap text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
              Om Oss
            </li>
            <li className="cursor-pointer text-[12px] md:text-lg text-nowrap text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
              Tjenester
            </li>
            <li className="cursor-pointer text-[12px] md:text-lg text-nowrap text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
              Kontakt
            </li>
          </ul>
        </section>
      </header>

      <header className="w-screen h-12 z-20 flex gap-5 justify-between md:hidden items-center absolute top-0 left-0 bg-transparent p-4">
        <section className="flex-1">
          <h1 className="text-white font-poppins font-bold text-2xl">
            Nordisk Standard
          </h1>
        </section>

        <button onClick={() => setIsOpen(!isOpen)} className="z-50">
          {isOpen ? (
            <img src={CloseIcon} alt="Close Icon" className="w-8 h-8" />
          ) : (
            <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.section
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ x: "-100%", opacity: 0 }}
              className="absolute top-0 w-screen h-screen bg-white flex justify-center items-center z-30 left-0"
            >
              <motion.ul initial="hidden" animate="visible">
                {links.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    className="p-5 m-4 flex justify-center gap-4 items-center"
                  >
                    <div>
                      <p className="font-bold text-sm text-black">
                        {item.text}
                      </p>
                      <p className="text-xs font-normal text-black">
                        {item.description}
                      </p>
                    </div>
                    <img src={ArrowIcon} className="w-4 h-4" alt="Go to link" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
