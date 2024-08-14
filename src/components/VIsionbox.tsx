import Logo from "../assets/Logovv.svg";

const VIsionbox = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center lg:pt-20 ">
      <div className="rounded-full overflow-hidden w-10/12 md:w-7/12 lg:w-3/12 aspect-square ">
        <img
          src={Logo}
          alt="Tessie and Samir image"
          className="object-cover w-full h-full drop-shadow-lg"
        />
      </div>
      <article className="w-10/12 flex flex-col gap-6 justify-center items-center font-infant">
        <h5 className="text-center font-comorant font-bold text-contact text-3xl md:text-5xl pt-12">
          Hvem er då vi
        </h5>

        <p className="text-center font-medium lg:w-6/12 font-infant text-2xl md:text-3xl text-black">
          Vi er et par som har stort interesse for mennesker, service og utleie.
          Vi har bred erfaring fra service-, omsorgs- og finansindustrien.
          Sammen er vi et dedikert team som elsker at yte god service til våre
          gjester, leietakere og partnere.
        </p>

        <section className="w-full flex flex-col justify-center items-center">
          <p className="text-sub font-infant font-light text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Sjekk oss gjerne ut på Linkedin:{" "}
          </p>

          <section className="w-full flex justify-center items-center gap-4 p-6">
            <a
              className="py-2 px-4 text-lg md:text-xl lg:text-2xl rounded-lg bg-cardbg  shadow-lg hover:bg-contact hover:text-herosub text-sub transition-all duration-100"
              href="https://www.linkedin.com/in/samir-k-445468b8/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Samir
            </a>
            <a
              className="py-2 px-4 text-lg md:text-xl lg:text-2xl rounded-lg bg-cardbg  shadow-lg hover:bg-contact hover:text-herosub text-sub transition-all duration-100"
              href="https://no.linkedin.com/in/tessie-hagstr%C3%B6m-29a591113"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Tessie
            </a>
          </section>
        </section>
      </article>
    </section>
  );
};

export default VIsionbox;
