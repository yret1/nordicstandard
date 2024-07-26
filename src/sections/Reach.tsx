import GridContent from "../components/GridContent";
import GridImg from "../components/GridImg";
import Superhost from "../assets/Superhost.png";

const Reach = () => {
  return (
    <section
      id="reach"
      className="w-screen flex flex-col gap-12 justify-center items-center pt-20"
    >
      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 md:grid flex flex-col grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridImg
          img="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          pos="object-center"
        />
        <GridContent
          goal="Tilbakemeldinger"
          title="Fortolighet"
          desc="Vi setter stor pris på fortroligheten vi fått fra våre partnere.
"
          dataone={{ data: "Partners", value: "100" }}
          datatwo={{ data: "Bookings", value: "400" }}
          buttonText="Se vad partnere sier"
          href="/#meriter"
        />
      </section>

      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 md:grid flex flex-col-reverse grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridContent
          goal="Airbnb"
          title="Superhost!"
          desc="Vi er Superhosts på Airbnb. Dette er  vanskelig at oppnå, samt å enda vanskeligere å beholde over lenger tid."
          dataone={{ data: "År på airbnb", value: "6" }}
          datatwo={{ data: "Vurdering", value: "4.95" }}
          buttonText="Contact us"
          href="/#kontakt"
        />
        <GridImg img={Superhost} pos="object-center" />
      </section>
    </section>
  );
};

export default Reach;
