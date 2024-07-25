const GoalCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full md:border-2 md:p-4 rounded-md md:bg-white border-black flex md:h-full flex-col justify-start items-center">
      <hr className="w-full block md:hidden" />
      <div className="flex flex-col justify-start items-start gap-2 h-full pt-6 md:pt-0">
        <p className="font-bold text-xl font-poppins text-black">{title}</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section
      id="vision"
      className="w-screen flex justify-center items-center p-6"
    >
      <section className="w-screen flex flex-col justify-center items-center">
        <p className="font-poppins underline text-black font-bold text-xl text-center md:text-3xl lg:text-6xl">
          Hosting stays shouldn't be difficult
        </p>
        <p className="font-poppins underline text-blue-700 font-bold text-2xl text-center md:text-4xl lg:text-7xl pb-12 md:pb-20">
          So we changed that.
        </p>

        <section className="w-screen lg:w-8/12 flex flex-col justify-start items-start gap-5 p-6 md:flex-row ">
          <GoalCard
            title="1. Simplify"
            description="We make it easy to host your property without the hassle of managing it."
          />
          <GoalCard
            title="2. Automate"
            description="We automate the process of hosting your property so you can focus on other things."
          />
          <GoalCard
            title="3. Maximize"
            description="We help you maximize the value of your property by providing a great experience for your guests."
          />
        </section>
      </section>
    </section>
  );
};

export default Vision;
