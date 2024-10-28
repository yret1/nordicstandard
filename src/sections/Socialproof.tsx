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

  const reviews = [
    {
      name: "Humberto",

      rating: 5,
      review:
        "Samir og Tessie har gjort det mulig for meg å få ut mye mer av min utleie. Jeg kan nå dra på ferie å vite at utleien min blir tatt godt vare på mens jeg er borte. Jeg er kjempefornøyd med samarbeidet til Tessie og Samir i Nordisk Standard. Anbefaler dem sterkt!",
    },
    {
      name: "Caren",

      rating: 5,
      review:
        "Samir og Tessie kontaktet meg når jeg skulle leie ut min bolig for langsiktig leie på Finn i april. Vi hadde et hyggelig møte og jeg testet dem ut. Jeg har nå fått flera tusen mer i leieinntekter hver måned og mye mindre arbeid med min utleie. De er kjempegode og trygge at samarbeide med, anbefaler sterkt!",
    },
    {
      name: "Cilia",
      rating: 5,
      review:
        "Samir og Tessie kontaktet meg via Airbnb å spurte meg om de kunne forvalte min utleie for meg. Jeg testet det ut og har vært kjempefornøyd med boligforvaltningen og samarbeidet. Samir og Tessie er svært enkle å kommunisere med, tar initiativ til forbedringer og ansvar for påfyll av gjenbruksartikler. Det har vært helt gull å kunne overlate utleien av leiligheten min til noen man kan stole på og samtidig spare inn verdifull tid",
    },
  ]; //*/
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
          title="Fortrolighet og Trygghet"
          desc="Vi har heldigvis ikke hatt en eneste skade i noen av hjemmene. Vi utfører god due diligence på gjestene som vi tar inn i hjemmene."
          href="/#meriter"
          aria-label="Partner testimonials and ratings"
        />
      </section>
      <Reach />
      <p className="text-contact font-comorant font-bold py-10 md:text-4xl text-2xl lg:text-5xl">
        Dette sier noen av våre partnere!
      </p>
      <section className="w-screen md:w-12/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-1  lg:grid-cols-2 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
        {reviews.slice(0, numReviews).map((review, index) => (
          <SocialCard
            key={index}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </section>

      <p className="text-contact font-comorant font-bold py-10 md:text-4xl text-2xl lg:text-5xl">
        Se hva våre gjester sier!
      </p>
      <section className="w-screen md:w-12/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-1  lg:grid-cols-2 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
        {reviewsGuests.slice(0, numReviews).map((review, index) => (
          <SocialCard
            key={index + review.name}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </section>
    </section>
  );
};

export default Socialproof;
