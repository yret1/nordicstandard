import { useEffect, useState } from "react";
import SocialCard from "../components/SocialCard";

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
      name: "John Doe",
      rating: 5,

      img: "https://thispersondoesnotexist.com/",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      rating: 5,

      img: "https://thispersondoesnotexist.com/",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      rating: 5,

      img: "https://thispersondoesnotexist.com/",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      rating: 5,

      img: "https://thispersondoesnotexist.com/",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      name: "John Doe",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
  ];
  return (
    <section
      id="meriter"
      className="w-screen flex flex-col justify-center items-center pb-12"
    >
      <p className="text-black font-poppins font-bold py-10 md:text-xl text-lg lg:text-2xl">
        See what our{" "}
        <span className="text-blue-700 text-2xl md:text-3xl lg:text-4xl">
          partners
        </span>{" "}
        say!
      </p>
      <section className="w-screen md:w-10/12 lg:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
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

      <p className="text-black font-poppins font-bold py-10 md:text-xl text-lg lg:text-2xl">
        See what our{" "}
        <span className="text-blue-700 text-2xl md:text-3xl lg:text-4xl">
          guests
        </span>{" "}
        say!
      </p>
      <section className="w-screen md:w-10/12 lg:w-8/12 py-12 grid place-items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 md:p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6">
        {reviewsGuests.slice(0, numReviews).map((review, index) => (
          <SocialCard
            key={index}
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
