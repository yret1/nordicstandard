import ServiceBox from "../components/ServiceBox";
import Plane from "../assets/Plane.svg";
import House from "../assets/House.svg";
import Coin from "../assets/Coin.svg";
import GridImg from "../components/GridImg";
import GridContent from "../components/GridContent";
import Service from "../assets/Service.avif";
import Kontakt from "../assets/Kontakt.avif";

const Services = () => {
  return (
    <section
      id="services"
      className={`w-full flex flex-col justify-center bg-botWave items-center p-4 bg-[#f7efcf] bg-cover bg-bottom relative pb-32`}
      aria-label="Our Services Section"
    >
      <section
        className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 lg:w-8/12"
        aria-label="Service Offerings"
      >
        <GridImg
          img={Service}
          pos="object-center"
          ver="2"
          alt="Image depicting a house for short-term rental"
          aria-label="Image depicting a house for short-term rental"
        />
        <GridContent
          desc="Vi håndterer din utleie for deg og optimerer leieinntektene dine."
          title="Utleieforvaltning i Oslo – korttidsutleie, langtidsutleie og kombinasjonsutleie"
          href="/#services"
          aria-label="Description of our offerings"
        />
      </section>
      <section
        className="grid w-full lg:w-12/12 xl:w-8/12 gap-1 md:gap-2 grid-cols-1 grid-rows-3 lg:grid-cols-3 md:grid-rows-1"
        aria-label="Service Boxes"
      >
        <ServiceBox
          title="Korttidsutleie"
          description="Utleieforhold under 30 dager per utleieforhold. Vi bruker flere utleie-sider for å maksimere dine leieinntekter."
          img={House}
          aria-label="Service box for short-term rental"
        />
        <ServiceBox
          title="Langtidsutleie"
          description="Langsiktige utleieforhold der vi administrerer hele utleien for deg."
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
          desc="Vi tar oss tid til å diskutere dine ønsker og behov for å finne den beste løsningen for deg."
          title="Kontakt oss"
          buttonText="Kontakt oss for en uforpliktende samtale"
          href="/#kontakt"
          aria-label="Contact us for a consultation"
        />
        <GridImg
          img={Kontakt}
          pos="object-center"
          alt="Image depicting a cozy street in Oslo norway"
          aria-label="Image depicting a consultation"
        />
      </section>
    </section>
  );
};

export default Services;
