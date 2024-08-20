import MenuIcon from "../assets/Menu.svg";
import CloseIcon from "../assets/Cross.svg";
import ArrowIcon from "../assets/Arrow.svg";
import Contact from "../assets/Contact.svg";
import { useEffect, useRef, useState } from "react";
// Remove the import statement

import "../index.css";

import { motion, AnimatePresence } from "framer-motion";
import { debounce } from "framer/render/utils/debounce.js";

export const links = [
  {
    text: "Tjenester",
    description: "Se våre tjenester og hva vi kan tilby deg!",
    href: "/#services",
  },
  {
    text: "Erfaring Og Meriter",
    description: "Se våre meriter og erfaring. Våre kunder er veldig fornøyde!",
    href: "/#meriter",
  },
  {
    text: "Visjon",
    description: "Les mer om vår visjon!",
    href: "/#visjon",
  },
  {
    text: "Om Oss",
    description: "Se hvem som står bak selskapet!",
    href: "/#om",
  },
  {
    text: "Kontakt",
    description: "Ta kontakt for en hyggelig prat.",
    href: "/#kontakt",
  },
];
const Header = () => {
  const [scrollDistance, setScrollDistance] = useState<boolean>(false);
  const scrollTimeout = useRef<number | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("");

  const sections = [
    "tjenester",
    "erfaring og meriter",
    "visjon",
    "om oss",
    "kontakt",
    "home",
  ];

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const scrollY = window.scrollY;

      // Handle scroll distance state
      if (scrollY > 100) {
        setScrollDistance(true);
      } else {
        setScrollDistance(false);
      }

      // Handle current section detection
      let id = "";
      sections.forEach((section) => {
        switch (section) {
          case "tjenester":
            id = "services";
            break;
          case "erfaring og meriter":
            id = "meriter";
            break;
          case "visjon":
            id = "visjon";
            break;
          case "om oss":
            id = "om";
            break;
          case "kontakt":
            id = "kontakt";
            break;
          case "home":
            id = "home";
            break;
          default:
            break;
        }

        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top < window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 4
          ) {
            setCurrentSection(section + "-link");
          }
        }
      });
    }, 50); // Adjust the debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (event: any, content: any) => {
    const rect = event.target.getBoundingClientRect();

    const description = content.description;
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
      <header className="w-screen h-12 z-20 fixed flex-col gap-2 justify-center hidden md:flex items-center top-0 left-0 bg-transparent  p-10">
        <motion.section className="pt-10" layout>
          <motion.h1
            initial={{ opacity: 0, y: 0, display: "block" }}
            animate={{
              opacity: scrollDistance ? 0 : 1,
              y: scrollDistance ? -50 : 0,
              height: scrollDistance ? 0 : "auto",
            }}
            transition={{ delay: 0.1 }}
            layout
            className="font-bold text-4xl font-comorant text-center text-white"
          >
            Nordisk Standard
          </motion.h1>
        </motion.section>
        <motion.section
          initial={{
            opacity: 0,
            height: "auto",
            backgroundColor: "transparent",
            color: "white",
            padding: "0px",
            borderRadius: "0px",
            boxShadow: "0 0 0px rgba(0,0,0,0)",
          }}
          animate={{
            backgroundColor: scrollDistance ? "white" : "transparent",
            padding: scrollDistance ? "10px" : "0px",
            height: "auto",
            opacity: 1,
            borderRadius: scrollDistance ? "25px" : "0px",
            color: scrollDistance ? "black" : "white",
            boxShadow: scrollDistance
              ? "0 0 10px rgba(0,0,0,0.1)"
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.1 }}
          layout
        >
          <motion.ul
            layout
            className="w-full justify-center flex items-center gap-5"
          >
            {links.map((item, index) => (
              <a key={index} href={item.href}>
                <li
                  id={item.text.toLowerCase() + "-link"}
                  className={`cursor-pointer text-[12px] md:text-lg text-nowrap transition-all duration-200 p-2 rounded-full border-2  ${
                    currentSection == item.text.toLowerCase() + "-link"
                      ? "border-black bg-white hover:border-slate-200"
                      : "border-transparent bg-transparent hover:border-white"
                  } transition-all font-infant `}
                  onMouseEnter={(e) => handleMouseEnter(e, item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.text}
                </li>
              </a>
            ))}
          </motion.ul>
        </motion.section>

        <AnimatePresence>
          {tooltip.show && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=" tooltip bg-black bg-opacity-65 text-white font-comorant p-2 rounded-md mt-px z-20"
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

      <motion.header
        initial={{ padding: scrollDistance ? "100px" : "20px" }}
        className="w-screen h-12 z-20 flex gap-5 justify-between md:hidden items-center fixed top-0 left-0 bg-transparent px-6"
      >
        <section className="flex-1">
          <AnimatePresence>
            <motion.h1
              initial={{ opacity: 1, y: 0, display: "block" }}
              animate={{
                opacity: scrollDistance ? 0 : 1,
                y: scrollDistance ? -50 : 0,
                height: scrollDistance ? 0 : "auto",
              }}
              layout
              className="text-white font-comorant font-bold text-2xl"
            >
              Nordisk Standard
            </motion.h1>
          </AnimatePresence>
        </section>

        <motion.button
          initial={{
            padding: "0px",
            backgroundColor: "transparent",
            borderRadius: "0px",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
          }}
          animate={{
            padding: scrollDistance && !isOpen ? "6px" : "0px",
            backgroundColor:
              scrollDistance && !isOpen ? "black" : "transparent",
            borderRadius: scrollDistance && !isOpen ? "10px" : "0px",
            boxShadow:
              scrollDistance && !isOpen
                ? "0 0 10px rgba(0,0,0,0.1)"
                : "0 0 0 rgba(0,0,0,0)",
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="z-50"
        >
          {isOpen ? (
            <img src={CloseIcon} alt="Close Icon" className="w-8 h-8" />
          ) : (
            <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6" />
          )}
        </motion.button>

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
                  <motion.a
                    onClick={() => setIsOpen(false)}
                    custom={index}
                    variants={staggerVariants}
                    href={item.href}
                    key={index}
                  >
                    <li
                      key={index}
                      className={`p-5 m-4 flex justify-center gap-4 items-center  ${
                        links.length - 1 === index
                          ? "border-2 border-black rounded-lg"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm text-black">
                          {item.text}
                        </p>
                        <p className="text-xs font-normal text-black">
                          {item.description}
                        </p>
                      </div>
                      <img
                        src={ArrowIcon}
                        className="w-4 h-4"
                        alt="Go to link"
                      />
                    </li>
                  </motion.a>
                ))}
              </motion.ul>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.a
        href="/#kontakt"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          scrollDistance ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        className="fixed w-20 h-20  cursor-pointer bg-contact border-transparent bottom-10 rounded-full p-4 border-2 hover:border-black transition-all shadow-lg right-10 z-50"
      >
        <img
          src={Contact}
          alt="Contact icon"
          className="w-full h-full object-contain"
        />
      </motion.a>
    </>
  );
};

export default Header;
