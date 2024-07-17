import GridContent from "../components/GridContent";
import GridImg from "../components/GridImg";

const Reach = () => {
  return (
    <section className="w-screen flex flex-col gap-12 justify-center items-center">
      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridImg img="https://images.unsplash.com/photo-1642010652250-2215cfb459ac?q=80&w=3419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <GridContent
          goal="Reach your goals"
          title="Grow your bookings and increase revenue"
          desc="We have worked with a multitude of clients and have helped them grow
          their bookings and increase their revenue. We have a proven track
          record of success and we are confident that we can help you achieve
          your goals. Our partners see an average growth of 30% in bookings!"
          dataone={{ data: "Partners", value: "100" }}
          datatwo={{ data: "Bookings", value: "400" }}
          buttonText="Read about our vision"
          href="/vision"
        />
      </section>

      <section className="w-11/12 place-items-center gap-8 p-6  justify-items-center md:p-6 md:w-10/12 lg:w-8/12 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <GridContent
          goal="Relax and enjoy"
          title="Let us handle the hard work."
          desc="We take care of all the logistics and hard work so you can relax and enjoy your time. Our team will handle everything from booking to cleaning and maintenance. Wether you are looking to rent short or longtime, we have the solution for you."
          dataone={{ data: "Locations", value: "25" }}
          datatwo={{ data: "Rating", value: "4.9" }}
          buttonText="Contact us"
          href="/#kontakt"
        />
        <GridImg img="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>

      <section className="w-11/12 md:w-10/12 lg:w-8/12 grid grid-cols-1 grid-rows-1 p-6">
        <GridContent
          goal="Proven Record"
          title="Airbnb Superhost!"
          desc="With a proven track record of success, we are confident that we can help you achieve your goals. Our partners see an average growth of 30% in bookings! With our superhost status we attract large amounts of guests. Let's grow together! Need more information? See who we are!"
          buttonText="Visit Airbnb"
          href="https://www.airbnb.com/"
        />
      </section>
    </section>
  );
};

export default Reach;
