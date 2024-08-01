import ServiceBox from "../components/ServiceBox";
import Plane from "../assets/Plane.svg";
import House from "../assets/House.svg";
import Coin from "../assets/Coin.svg";
import GridImg from "../components/GridImg";
import GridContent from "../components/GridContent";
import Mainbg from "../assets/Mainbg.svg";

const Services = () => {
  return (
    <section
      id="services"
      style={{ backgroundImage: `url(${Mainbg})` }}
      className={`w-full flex flex-col justify-center items-center p-4  bg-[#f7efcf] bg-cover bg-bottom`}
    >
      <section className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12">
        <GridImg
          img="https://images.unsplash.com/photo-1719579019072-96e65b294301?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="object-center"
        />
        <GridContent
          goal="Hva tilbyr vi?"
          desc="Vi håndterer din utleie for deg og optimerer leieinntektene dine."
          title="Hva tilbyr vi?"
          href="/#services"
        />
      </section>
      <section className="grid w-full md:w-10/12 lg:w-8/12 gap-1 md:gap-2 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
        <ServiceBox
          title="Korttidsutleie
"
          description="Utleie på kort sikt, enten konstant eller kun når du er på ferie eller skal bort."
          img={House}
        />
        <ServiceBox
          title="Langtidsutleie"
          description="Utleie for lengre perioder, som for eksempel til studenter eller fastboende."
          img={Plane}
        />
        <ServiceBox
          title="Kombinasjonsutleie"
          description="En fleksibel modell hvor vi kombinerer langsiktig utleie (som til studenter i høst- og vårsemesteret) og kortsiktig utleie i høysesongen"
          img={Coin}
        />
      </section>

      <section className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12">
        <GridContent
          goal="Kontakt"
          desc="Vi tar oss tid til å diskutere dine ønsker og behov for å finne den beste løsningen for deg. Kontakt oss for en uforpliktende samtale"
          title="Kontakt oss"
          buttonText="Kontakt oss for en uforpliktende samtale"
          href="/#services"
        />
        <GridImg
          img="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="object-center"
        />
      </section>

      <section className="w-full flex flex-col gap-8 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12">
        <GridImg
          img="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="object-center"
        />
        <GridContent
          goal="Tilbakemeldinger"
          title="Fortolighet"
          desc="Vi setter stor pris på fortroligheten vi fått fra våre partnere.Med over 100 fornøyde gjester og samarbeidspartnere jobber vi for deg og din bolig.
"
          dataone={{ data: "Rating", value: "4.9 / 5" }}
          buttonText="Se vad partnere sier"
          href="/#meriter"
        />
      </section>
    </section>
  );
};

export default Services;
