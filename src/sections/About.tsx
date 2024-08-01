import AuthorCard from "../components/AuthorCard";

const About = () => {
  const Profiles = [
    {
      name: "Samir Kamrouna",
      title: "CEO",
      img: "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about:
        "Samir er administrerende direktør i vårt vertsselskap for eiendom, og leder teamet vårt med visjon og dedikasjon. Med lang erfaring i gjestfrihetsbransjen og en dyp forståelse av Airbnb-markedet, driver Samir vårt oppdrag om å gi enestående gjesteopplevelser og eksepsjonell eiendomsdrift. Hans strategiske lederskap og forpliktelse til innovasjon sikrer at vi forblir i forkant av bransjen, og leverer service og vekst uten sidestykke.",
      background:
        "Jobbet i Airbnb i 5 år, og har en lidenskap for interiørdesign. Elsker å reise og møte nye mennesker.",
    },
    {
      name: "Tessie Hagström",
      title: "CFO",
      img: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about:
        "Tessie er finansdirektør i vårt vertsselskap, og spesialiserer seg på Airbnb-administrasjon. Med et skarpt øye for detaljer og en strategisk tilnærming til finansiell planlegging, sikrer Tessie at vår virksomhet går jevnt og lønnsomt. Hennes ekspertise innen økonomistyring og lidenskap for eksepsjonelle gjesteopplevelser gjør henne til en uvurderlig ressurs for teamet vårt. Enten du optimerer budsjetter eller utvikler innovative strategier, er Tessie dedikert til å løfte våre vertstjenester for eiendom til nye høyder.",
      background:
        "Jobbet i Airbnb i 5 år, og har en lidenskap for interiørdesign. Elsker å reise og møte nye mennesker.",
    },
  ];
  return (
    <section
      id="om"
      className="w-screen flex flex-col justify-center items-center pb-12 cover bg-top"
    >
      <p className="font-bold font-poppins text-accent text-2xl md:text-3xl lg:text-5xl py-6">
        Bak selskapet
      </p>
      <section className="w-11/12 md:w-10/12 lg:w-8/12 gap-4 md:gap-6 lg:gap-10 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        {Profiles.map((profile, index) => (
          <AuthorCard
            key={profile.name + index}
            name={profile.name}
            img={profile.img}
          />
        ))}
      </section>
    </section>
  );
};

export default About;
