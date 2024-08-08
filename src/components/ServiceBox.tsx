interface ServiceBoxProps {
  title: string;
  description: string;
  img: string;
}
const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, img }) => {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center gap-4 border-2 border-slate-800 rounded-md p-6">
      <section className="flex justify-start w-full gap-3 items-center flex-col ">
        <img
          src={img}
          alt="Service"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
        <h3 className="font-bold text-lg font-comorant md:text-xl text-contact">
          {title}
        </h3>
      </section>
      <section className="flex justify-start items-start w-full h-full">
        <p className="text-sub font-infant text-sm md:text-lg">{description}</p>
      </section>
    </article>
  );
};

export default ServiceBox;
