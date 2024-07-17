const Stats = () => {
  return (
    <section className="w-screen bg-blue-700 place-items-center gap-4 shadow-md p-8 py-16 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins text-xl">10000 +</p>
        <p className="text-white font-poppins font-bold text-2xl">Gjester</p>
      </section>
      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins text-xl">80% +</p>
        <p className="text-white font-poppins font-bold text-2xl">
          Utleiebelegg
        </p>
      </section>
      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins text-xl">40 000 000kr +</p>
        <p className="text-white font-poppins font-bold text-2xl">
          Leieinntekter
        </p>
      </section>
      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins text-xl">4.9 / 5.0</p>
        <p className="text-white font-poppins font-bold text-2xl">
          Airbnb Rating
        </p>
      </section>
    </section>
  );
};

export default Stats;
