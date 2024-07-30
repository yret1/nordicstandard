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
      className="w-full flex flex-col justify-center items-center p-4"
    >
      <section className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12">
        <GridImg
          img="https://images.unsplash.com/photo-1468930830753-6699377de411?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="object-center"
        />
        <GridContent
          goal="Tjenester"
          desc="Vi håndterer din utleie for deg og optimerer leieinntektene dine. Våre boligpartners får økte leieinntekter Og mer fritid. Vår modell setter våre og våre parrnere sine interesser helt i linje."
          title="Hva tilbyr vi?"
          buttonText="Hva tilbyr vi?"
          href="/#services"
          dataone={{ data: "Högere leieinntekter", value: "20%" }}
        />
      </section>
      <section className="font-bold font-poppins text-blue-700 text-2xl md:text-3xl lg:text-5xl py-6">
        <p>Vi tilbyr ulike utleiemodeller basert på dine ønske</p>
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

      <section className="w-screen py-10 flex justify-center items-center ">
        <button className="py-2 px-4  rounded-md bg-white border-[1px] border-black shadow-lg hover:bg-blue-700 hover:text-white text-black transition-all duration-100">
          <p className=" font-medium ">
            Kontakt oss for en uforpliktende samtale
          </p>
        </button>
      </section>

      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 md:grid flex flex-col grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
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
