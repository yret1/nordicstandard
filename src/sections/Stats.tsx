const Stats = () => {
  return (
    <section className="w-screen bg-blue-700 place-items-center gap-4  p-8 py-16 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 shadow-inner">
      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins font-bold text-2xl">
          Partnere tjener
        </p>
        <p className="text-white font-poppins text-xl">20% mer</p>
      </section>

      <section className="flex flex-col gap-2 text-center">
        <p className="text-white font-poppins font-bold text-2xl">
          Airbnb Rating
        </p>
        <p className="text-white font-poppins text-xl">4.9 / 5.0</p>
      </section>
    </section>
  );
};

export default Stats;
