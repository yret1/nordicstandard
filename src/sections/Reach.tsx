import GridContent from "../components/GridContent";
import GridImg from "../components/GridImg";
import Superhost from "../assets/Superhost.png";

const Reach = () => {
  return (
    <section
      id="reach"
      className="w-screen flex flex-col gap-12 justify-center items-center pt-20"
    >
      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 md:grid flex flex-col-reverse grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridContent
          goal="Airbnb"
          title="Superhost!"
          desc="Vi er Superhosts på Airbnb. Dette er  vanskelig at oppnå, samt å enda vanskeligere å beholde over lenger tid."
          dataone={{ data: "År på airbnb", value: "6" }}
          datatwo={{ data: "Vurdering", value: "4.95" }}
          buttonText="Til Airbnb"
          href="https://www.airbnb.co.uk/"
        />
        <GridImg img={Superhost} pos="object-center" />
      </section>
    </section>
  );
};

export default Reach;
