import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Howbox = ({ version }: { version: string }) => {
  const [content, setContent] = useState({
    title: "",
    description: "",
    img: "",
  });

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 * (parseInt(version) - 1) },
      });
    }
  }, [controls, inView, version]);
  useEffect(() => {
    switch (version) {
      case "1":
        setContent({
          title: "Kontakta Oss",
          description:
            "When you first contact us with a property you would like to manage trough Nordic standarda, we will set up a meeting to get to know you and your property better. We will also go through our terms and conditions and answer any questions you might have.",
          img: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=3820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });
        break;
      case "2":
        setContent({
          title: "Inspeksjon",
          description:
            "We will visit your property to get a better understanding of the property and its potential. We will also take pictures and gather information about the property.",
          img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });
        break;
      case "3":
        setContent({
          title: "Renting Out",
          description:
            "We will take care of everything from advertising your property to finding the right tenants. We will also take care of the contracts and make sure that everything is in order. You reap the rewards!",
          img: "https://images.unsplash.com/photo-1642211840197-62e225801ca4?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });
        break;
    }
  }, []);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col justify-start items-center overflow-hidden w-11/12 md:w-96 h-[440px] bg-white shadow-md relative rounded-lg"
    >
      <div className="absolute text-black bg-white w-6 h-6 flex justify-center items-center rounded-full font-bold top-2 left-2">
        {version}
      </div>
      <img
        src={content.img}
        className="w-full object-cover object-center h-48"
      />
      <section className="w-full flex flex-col justify-start items-start p-4 gap-6">
        <h3 className="text-black font-2xl font-bold font-poppins">
          {content.title}
        </h3>
        <p>{content.description}</p>
      </section>
    </motion.article>
  );
};

export default Howbox;
