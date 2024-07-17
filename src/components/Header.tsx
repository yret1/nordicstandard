import MenuIcon from "../assets/Menu.svg";
import CloseIcon from "../assets/Cross.svg";
import ArrowIcon from "../assets/Arrow.svg";
import { useEffect, useRef, useState } from "react";

import "../index.css";

import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  interface TooltipPosition {
    top: number;
    left: number;
  }

  const [tooltip, setTooltip] = useState({
    show: false,
    content: "" as string,
    position: {} as TooltipPosition,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (tooltip.show && tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const newLeft = tooltip.position.left - tooltipWidth / 2;
      setTooltip((prevTooltip) => ({
        ...prevTooltip,
        position: { ...prevTooltip.position, left: newLeft },
      }));
    }
  }, [tooltip.show]);

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
      description:
        "Se våre meriter og erfaring. Våre kunder er veldig fornøyde!",
    },
    {
      text: "Visjon",
      description:
        "Vår visjon er å skape en bedre verden for alle. Les mer om vår visjon!",
    },
    {
      text: "Om Oss",
      description:
        "Les om oss og vår historie. Se hvem som står bak selskapet!",
    },
    {
      text: "Tjenester",
      description: "Se våre tjenester og hva vi kan tilby deg og din bedrift!",
    },
    {
      text: "Kontakt",
      description: "Kontakt oss for mer informasjon. Vi svarer innen 24 timer!",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (event: any, content: any) => {
    const rect = event.target.getBoundingClientRect();

    const description =
      links.find((item) => item.text === content)?.description || "";
    setTooltip({
      show: true,
      content: description,
      position: {
        top: rect.bottom + 10, // Adjust the position as needed
        left: rect.left + rect.width / 2,
      },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: "", position: { top: 0, left: 0 } });
  };

  return (
    <>
      <header className="w-screen h-12 z-20 flex-col gap-2 justify-center hidden md:flex items-center absolute top-0 left-0 bg-transparent  p-10">
        <section className="pt-10">
          <h1 className="font-bold text-4xl font-poppins text-center text-white">
            Nordisk Standard
          </h1>
        </section>
        <section>
          <ul className="w-full justify-center flex items-center gap-5">
            {[
              "Erfaring Og Meriter",
              "Om Oss",
              "Visjon",
              "Tjenester",
              "Kontakt",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-[12px] md:text-lg text-nowrap text-white font-sans border-b-2 border-transparent hover:border-white transition-all"
                onMouseEnter={(e) => handleMouseEnter(e, item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <AnimatePresence>
          {tooltip.show && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=" tooltip bg-white p-2 rounded-md z-20"
              style={{
                top: tooltip.position.top,
                left: tooltip.position.left,
              }}
            >
              {tooltip.content}
            </motion.div>
          )}
        </AnimatePresence>
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
