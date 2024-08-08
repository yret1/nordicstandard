import { useEffect, useState } from "react";
import SocialCard from "../components/SocialCard";
import Reach from "./Reach";
import KeyImage from "../assets/KeyImage.avif";
import GridImg from "../components/GridImg";
import GridContent from "../components/GridContent";
const Socialproof = () => {
  const [numReviews, setNumReviews] = useState(3);

  useEffect(() => {
    const updateNumReviews = () => {
      if (window.innerWidth >= 1024) {
        setNumReviews(4); // large screens
      } else if (window.innerWidth >= 768) {
        setNumReviews(4); // medium screens
      } else {
        setNumReviews(4); // small screens
      }
    };
    updateNumReviews();

    window.addEventListener("resize", updateNumReviews);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateNumReviews);
  });

  const reviewsGuests = [
    {
      name: "Todd",
      rating: 5,

      img: "https://images.unsplash.com/photo-1578463637591-54d8030ba6c7?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "This place was fantastic and Tessie and Samir were the 2 best hosts I've ever had!!! I highly recommend their place!! We had a GREAT time and would definitely stay there again!",
    },
    {
      name: "Tess Erngren",
      rating: 5,

      img: "https://plus.unsplash.com/premium_photo-1670606249973-9cd2f650ad4a?q=80&w=3334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "I wish we got to hang out with the hosts! Just from the short messages, books and interior i figure these are people I'd like to hang out with. Great apartment, great location and great hosts!",
    },
    {
      name: "Margrete",
      rating: 5,

      img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Vi hadde noen veldig fine dager i leiligheten til Tessie og Samir. Leiligheten lå flott til, med gangavstand til hyggelige områder rundt Alexander Kiellans plass, og god tilgang på kollektivtransport med til sentrum. Selve leiligheten var både fin og koselig innredet, og perfekt i størrelse til vår familie på fire. Tessie og Samir har vært veldig både ryddige og lette å kommunisere med, og de har lagt alt til rette for et flott opphold i Oslo for oss. Vi kan virkelig anbefale stedet videre! Og bi kommer gjerne igjen :)",
    },
    {
      name: "Kevin",
      rating: 5,
      img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Perfectly located and very charming home for a short or longer stay with a small group. The hosts were very friendly, helpful and easy to communicate with. This AirBNB is perfectly positioned between the cool neighborhood Grünerløkka whilst also being a short walk away from both Oslo's main train station and the city center. The place is also conveniently located near resturants, supermarkets and a new food hall. We stayed in the home for a weekend in summer, but i can imagine that this traditional wooden home would also be lovley to stay at during colder winter months. Would higly recommend!",
    },
  ];

  /*const reviews = [
    {
      name: "Lise Hansen",
      title: "CEO",
      img: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=3344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      review:
        "Vi er svært fornøyde med samarbeidet med Nordisk Standard. De har vist stor kompetanse i å administrere vår Airbnb-eiendom, og vi har sett betydelig økning i inntektene våre. En pålitelig partner vi setter stor pris på.",
    },
    {
      name: "Kari Berg",
      title: "CEO",
      img: "https://images.unsplash.com/photo-1616325629936-99a9013c29c6?q=80&w=3671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      review:
        "Nordisk Standard har overgått våre forventninger. De har håndtert alt fra booking til vedlikehold med høy profesjonalitet og engasjement. Vår eiendom har aldri vært i bedre hender.",
    },
    {
      name: "Erik Johansen",
      title: "CEO",
      img: "https://images.unsplash.com/photo-1492633397843-92adffad3d1c?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      review:
        "Å jobbe med Nordisk Standard har vært en veldig positiv opplevelse. De har gjort en utmerket jobb med å leie ut vår eiendom, og kommunikasjonen har vært topp. Vi er veldig glade for å ha dem som vår partner.",
    },
  ];//*/
  return (
    <section
      id="meriter"
      className="w-screen flex flex-col justify-center items-center bg-cover bg-bottom pb-2 px-6"
    >
      <section
        className="w-full flex flex-col gap-4 md:grid grid-cols-2 py-6 md:py-12 md:w-10/12 lg:w-8/12"
        aria-label="Testimonials Section"
      >
        <GridImg
          img={KeyImage}
          pos="object-center"
          alt="Image showing keys to an apartment being handed over."
          aria-label="Image showing keys being handed over."
        />
        <GridContent
          title="Fortrolighet"
          desc="Vi setter stor pris på fortroligheten som vi har fått fra våre boligpartnere. Med over 400 bookinger og over 300 tilbakemeldinger fra gjestene våre, så jobber vi med høy integritet for boligpartnerne og gjestene våre."
          href="/#meriter"
          aria-label="Partner testimonials and ratings"
        />
      </section>
      <Reach />
      {/*<p className="text-contact font-comorant font-bold py-10 md:text-4xl text-2xl lg:text-5xl">
        Se hva våre partnere sier!
      </p>
      <section className="w-screen md:w-12/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
        {reviews.slice(0, numReviews).map((review, index) => (
          <SocialCard
            key={index}
            name={review.name}
            title={review.title}
            img={review.img}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </section>
*/}
      <p className="text-contact font-comorant font-bold py-10 md:text-4xl text-2xl lg:text-5xl">
        Se hva våre gjester sier!
      </p>
      <section className="w-screen md:w-12/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-1  lg:grid-cols-2 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
        {reviewsGuests.slice(0, numReviews).map((review, index) => (
          <SocialCard
            key={index + review.name}
            name={review.name}
            img={review.img}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </section>
    </section>
  );
};

export default Socialproof;
