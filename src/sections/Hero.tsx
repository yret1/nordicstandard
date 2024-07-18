import LandingVideo from "../assets/Landing.mp4";

const Hero = () => {
  return (
    <section className="w-screen h-screen relative bg-[url('./assets/NorwayDesktop.png')] bg-cover">
      <video
        autoPlay
        controls={false}
        muted
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src={LandingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="w-full h-full flex justify-start items-end bg-black bg-opacity-30 absolute top-0 pb-20 p-5 md:p-10 left-0">
        <section className=" flex flex-col gap-4 justify-start">
          <h2 className="text-white font-bold text-3xl font-poppins md:text-6xl">
            Airbnb Partner
          </h2>
          <p className="text-white font-medium texl-lg md:text-xl font-poppins md:w-4/12">
            Vi hjelper våre boligpartnere med å øke utleieverdien ved å gi
            enestående opplevelser til våre gjester og leietakere. Sånn at de
            kan bruke mer tid på det de ønsker.
          </p>
          <a href="/#reach">
            <button className="text-white bg-transparent ont-poppins backdrop-blur-sm p-4 border-2 md:w-2/12 md:hover:font-bold md:hover:scale-110 transition-all duration-300">
              Finne ut mer
            </button>
          </a>
        </section>
      </section>
    </section>
  );
};

export default Hero;
