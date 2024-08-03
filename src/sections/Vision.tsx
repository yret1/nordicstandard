const GoalCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full md:border-2 md:p-4 rounded-md md:bg-cardbg border-contact  flex md:h-full flex-col justify-start items-center">
      <hr className="w-full block md:hidden" />
      <div className="flex flex-col justify-start items-start gap-2 h-full pt-6 md:pt-0">
        <p className="font-bold text-xl font-poppins text-contact">{title}</p>
        <p className="text-sub">{description}</p>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section
      id="visjon"
      className="w-screen flex justify-center items-center p-6 bg-cover bg-top bg-botYellow"
    >
      <section className="w-screen flex flex-col justify-center items-center">
        <p className="font-poppins pb-12 text-white font-bold text-2xl text-center md:text-4xl lg:text-7xl pb-12 md:pb-20">
          Hovrfor Nordisk Standard?
        </p>

        <section className="w-screen lg:w-8/12 grid grid-cols-1 md:grid-cols-3 gap-5 p-6 md:flex-row ">
          <GoalCard
            title="Samarbeid"
            description="Hos Nordisk Standard er vårt hovedfokus å samarbeide tett med deg som partner for å optimere ditt boende. Vi bygger et nettverk av fagpersoner som kan håndtere alle boligrelaterte utfordringer og forbedre hjemmet ditt etter dine ønsker.
"
          />
          <GoalCard
            title="Service"
            description="Vi leverer førsteklasses service og profesjonalitet, og vi lytter alltid til dine tilbakemeldinger for å forbedre oss. Vårt mål er også at alle som besøker Oslo skal få en fantastisk opplevelse av byen vi elsker.
"
          />
          <GoalCard
            title="Trygt"
            description="Gjennom samarbeid, optimalisering og et pålitelig fagnettverk, jobber vi for å vedlike holde boligen din. En del er skeptiske til Airbnb utleie. Det som er godt og hvit er at gjester alltid må ha tidligere vurdering og er avhengig og at fortsatt få god tilbake melding. Var erfaring er at gjester tar godt vare på hjemmet og at de faktiskt blir mindre slitasjen på boligene, då majoriteten er ute og utforsker byen."
          />
        </section>
      </section>
    </section>
  );
};

export default Vision;
