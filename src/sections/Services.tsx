import ServiceBox from "../components/ServiceBox";
import Plane from "../assets/Plane.svg";
import House from "../assets/House.svg";
import Coin from "../assets/Coin.svg";
import GridImg from "../components/GridImg";
import GridContent from "../components/GridContent";
const Services = () => {
  return (
    <section
      id="services"
      className={`w-full flex flex-col justify-center bg-botWave items-center p-4 bg-[#f7efcf] bg-cover bg-bottom pb-32`}
      aria-label="Our Services Section"
    >
      <section
        className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 lg:w-8/12"
        aria-label="Service Offerings"
      >
        <GridImg
          img="https://media.istockphoto.com/id/1395942019/sv/foto/st-hanshaugen.jpg?s=2048x2048&w=is&k=20&c=xxDsVn6QqGK51mDpTTPC6-XOkY02ycPpcvtc0tWyH4E="
          pos="object-center"
          ver="2"
          aria-label="Image depicting a house for short-term rental"
        />
        <GridContent
          desc="Vi håndterer din utleie for deg og optimerer leieinntektene dine."
          title="Hva tilbyr vi?"
          href="/#services"
          aria-label="Description of our offerings"
        />
      </section>
      <section
        className="grid w-full lg:w-11/12 xl:w-8/12 gap-1 md:gap-2 grid-cols-1 grid-rows-3 lg:grid-cols-3 md:grid-rows-1"
        aria-label="Service Boxes"
      >
        <ServiceBox
          title="Korttidsutleie"
          description="Utleie på kort sikt, enten konstant eller kun når du er på ferie eller skal bort."
          img={House}
          aria-label="Service box for short-term rental"
        />
        <ServiceBox
          title="Langtidsutleie"
          description="Utleie for lengre perioder, som for eksempel til studenter eller fastboende."
          img={Plane}
          aria-label="Service box for long-term rental"
        />
        <ServiceBox
          title="Kombinasjonsutleie"
          description="En fleksibel modell hvor vi kombinerer langsiktig utleie (som til studenter i høst- og vårsemesteret) og kortsiktig utleie i høysesongen"
          img={Coin}
          aria-label="Service box for combination rental"
        />
      </section>

      <section
        className="w-full flex flex-col-reverse gap-4 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12"
        aria-label="Contact Us Section"
      >
        <GridContent
          desc="Vi tar oss tid til å diskutere dine ønsker og behov for å finne den beste løsningen for deg. Kontakt oss for en uforpliktende samtale"
          title="Kontakt oss"
          buttonText="Kontakt oss for en uforpliktende samtale"
          href="/#kontakt"
          aria-label="Contact us for a consultation"
        />
        <GridImg
          img="https://media.istockphoto.com/id/1315262534/sv/foto/f%C3%A4rgglada-radhus-i-centrala-oslo-norge.jpg?s=2048x2048&w=is&k=20&c=ZdiLuxjfaGphIAc-4Pkc9LsQdLsOES5iCs40izt9c7I="
          pos="object-center"
          aria-label="Image depicting a consultation"
        />
      </section>
    </section>
  );
};

export default Services;
