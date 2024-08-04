const Stats = () => {
  return (
    <section className="w-screen bg-bannerbg place-items-center gap-4  p-8 py-16 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <section className="flex flex-col gap-2 text-center">
        <p className="text-herosub font-comorant font-bold text-2xl lg:text-5xl">
          Partnere tjener
        </p>
        <p className="text-herosub font-infant text-xl lg:text-3xl">20% mer</p>
      </section>

      <section className="flex flex-col gap-2 text-center">
        <p className="text-herosub font-comorant font-bold text-2xl lg:text-5xl">
          Airbnb Rating
        </p>
        <p className="text-herosub font-infant text-xl lg:text-3xl">
          4.9 / 5.0
        </p>
      </section>
    </section>
  );
};

export default Stats;
