import GridContent from "../components/GridContent";
import GridImg from "../components/GridImg";
import Superhost from "../assets/Superhost.avif";

const Reach = () => {
  return (
    <section
      id="reach"
      className="w-screen flex flex-col gap-12 justify-center items-center"
    >
      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 md:grid flex flex-col-reverse grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridContent
          title="Superhost!"
          desc="Vi er Superhosts på Airbnb. Dette er  vanskelig at oppnå, samt enda vanskeligere at beholde over lenger tid."
          buttonText="Sjekk ut vår profil på Airbnb"
          href="https://www.airbnb.com/users/show/56021483"
        />
        <GridImg
          img={Superhost}
          pos="object-center"
          alt="Airbnb superhost image"
          cover
          ver="2"
        />
      </section>
    </section>
  );
};

export default Reach;
