import ReviewCard from "../components/ReviewCard";

const Om = () => {
  return (
    <section className="w-screen min-h-screen bg-cover bg-top bg-botWave">
      <h4 className="text-white font-poppins font-bold text-center text-3xl">
        Se Vad vare Partner Sejer
      </h4>

      <section className="pt-60 grid p-12 gap-10 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </section>
    </section>
  );
};

export default Om;
