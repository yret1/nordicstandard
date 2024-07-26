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
          goal="Hvorvor Noridsk Standard"
          desc="Vi håndterer din utleie for deg og optimerer leieinntektene dine. Våre boligpartners får økte leieinntekter Og mer fritid. Vår modell setter våre og våre parrnere sine interesser helt i linje."
          title="Utleiepartner"
          buttonText="Se tilbakemeldinger
        fra våre boligpartnere lenge ned."
          href="/#meriter"
          dataone={{ data: "Samarbeidspartnere", value: "23" }}
        />
      </section>
      <section className="w-full flex justify-center">
        <p></p>
      </section>
      <section className="grid w-full md:w-10/12 lg:w-8/12 gap-1 md:gap-2 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
        <ServiceBox
          title="Korttidsutleie
"
          description="Let us handle the hard work of managing your property. We take care of everything! Enjoy an increase in bookings and reap the rewards!"
          img={House}
        />
        <ServiceBox
          title="Langtidsutleie"
          description="We cover all of Norway, no matter where your property is located. We have a solution for you!"
          img={Plane}
        />
        <ServiceBox
          title="Kombinasjonsutleie"
          description="Industry leading low fees of only x.x %. We only make money when you do!"
          img={Coin}
        />
      </section>

      <section className="w-screen py-10 flex justify-center items-center ">
        <button className="border-2 border-black rounded-md py-2 px-4 hover:bg-green-200 transition-all duration-100">
          <p className="text-black font-medium ">
            Kontakt oss for en uforpliktende samtale
          </p>
        </button>
      </section>
    </section>
  );
};

export default Services;
