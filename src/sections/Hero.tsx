import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen flex flex-col justify-between items-center overflow-hidden"
      style={{ backgroundColor: "#f7f0e6" }}
      aria-label="Home Section"
    >
      <section className="flex flex-col items-center justify-center flex-1 gap-6 pt-24 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: "anticipate" }}
          className="text-6xl md:text-8xl font-bold font-comorant text-gray-900 text-center"
          aria-label="Nordisk Standard"
        >
          Nordisk Standard
        </motion.h1>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, ease: "anticipate" }}
          src="/nordisk_standard_logo.png"
          alt="Nordisk Standard logo – utleieforvaltning Oslo"
          className="w-36 h-36 md:w-48 md:h-48 object-contain"
        />
      </section>

      <section className="w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          style={{ fill: "#e8a030" }}
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full px-8 pb-16 pt-2 text-center"
          style={{ backgroundColor: "#e8a030" }}
        >
          <p className="text-white font-bold text-xl md:text-2xl font-comorant max-w-2xl mx-auto">
            Profesjonell korttidsutleie av leilighet i Oslo med full
            utleieforvaltning og økt inntektspotensial
          </p>
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;
