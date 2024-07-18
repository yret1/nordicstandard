import AuthorCard from "../components/AuthorCard";

const About = () => {
  const Profiles = [
    {
      name: "Samir Kamrouna",
      title: "CEO",
      img: "https://thispersondoesnotexist.com/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      background:
        "Worked at Airbnb for 5 years, and has a passion for interior design. Loves to travel and meet new people.",
    },
    {
      name: "Tessie Hagström",
      title: "CFO",
      img: "https://thispersondoesnotexist.com/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      background:
        "Worked at Airbnb for 5 years, and has a passion for interior design. Loves to travel and meet new people.",
    },
  ];
  return (
    <section
      id="om"
      className="w-screen flex flex-col justify-center items-center pb-12"
    >
      <p className="font-bold font-poppins text-black text-xl md:text-3xl lg:text-4xl py-6">
        Behind the{" "}
        <span className="text-blue-700 font-bold text-2xl md:text-4xl lg:text-5xl">
          company
        </span>
      </p>
      <section className="w-11/12 md:w-10/12 lg:w-8/12 gap-4 md:gap-6 lg:gap-10 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        {Profiles.map((profile, index) => (
          <AuthorCard
            key={index}
            name={profile.name}
            title={profile.title}
            img={profile.img}
            about={profile.about}
            background={profile.background}
          />
        ))}
      </section>
    </section>
  );
};

export default About;
