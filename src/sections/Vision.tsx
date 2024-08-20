const GoalCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index?: number;
}) => {
  return (
    <section className="w-full md:border-2 md:p-6 rounded-md md:bg-cardbg border-sub  flex md:h-full flex-col justify-start items-center">
      <hr
        className={`w-full block md:hidden ${
          index == 0 ? "hidden" : ""
        } border-opacity-35 border-white`}
      />
      <div className="flex flex-col justify-start items-start gap-2 h-full pt-6 md:pt-0">
        <p className="font-bold text-xl font-comorant text-white lg:text-contact">
          {title}
        </p>
        <p
          className={`text-white md:text-sub font-normal text-base md:text-xl font-infant`}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section
      id="visjon"
      className="w-screen flex justify-center items-center p-6 bg-cover bg-top bg-orango"
    >
      <section className="w-screen flex flex-col justify-center items-center">
        <p className="font-comorant pb-12 text-white font-bold text-2xl text-center md:text-4xl lg:text-5xl md:pb-20">
          Vår visjon er at alle som berøres av vårt selskap, i hvert ledd av
          våre interaksjoner, skal få oppleve hva Nordisk Standard står for.
        </p>

        <p className="text-white font-infant font-bold text-xl md:text-2xl xl:text-4xl">
          For oss handler Nordisk Standard om:
        </p>

        <section className="w-screen lg:w-11/12 2xl:w-8/12 grid grid-cols-1 md:grid-cols-3 gap-5 p-6 pt-10 md:flex-row ">
          <GoalCard
            index={0}
            title="Trygghet"
            description="I vårt selskap er trygghet en kjerneverdi. For oss er det avgjørende at både våre partnere og gjester føler seg sikre og godt ivaretatt i alle ledd av samarbeidet. Vi forstår at trygghet er et fundament for tillit, og vi er stolte av å være en pålitelig partner i alle aspekter av boligforvaltningen.
"
          />
          <GoalCard
            index={2}
            title="God service"
            description="Vi leverer førsteklasses service og profesjonalitet, og vi lytter alltid til dine tilbakemeldinger for å forbedre oss. Vårt mål er også at alle som besøker Oslo skal få en fantastisk opplevelse av byen vi elsker.
"
          />
          <GoalCard
            index={3}
            title="Godt Samarbeid"
            description="Vi samarbeider med flere forskjellige parter. For oss er det viktig at samarbeidet flyter på godt for alle våre partnere. At være en partnere som andre ønsker å anbefale oss videre til, er en viktig aspekt i vårt ønske for selskapet."
          />
        </section>
      </section>
    </section>
  );
};

export default Vision;
