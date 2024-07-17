interface GridContentProps {
  goal: string;
  title: string;
  desc: string;
  dataone?: {
    data: string;
    value: string;
  };
  datatwo?: {
    data: string;
    value: string;
  };
  buttonText: string;
  href: string;
}

const GridContent: React.FC<GridContentProps> = ({
  title,
  desc,
  goal,
  dataone,
  datatwo,
  buttonText,
  href,
}) => {
  return (
    <section className="w-full h-full flex flex-col justify-evenly items-center">
      <section className="flex justify-start items-start w-full pb-6">
        <p className="text-black font-bold font-poppins text-xl text-opacity-35">
          {goal}
        </p>
      </section>
      <hr className="w-full" />

      <section className="w-full py-6">
        <h4 className="font-bold text-black font-poppins text-5xl pb-5">
          {title}
        </h4>
        <p>{desc}</p>
      </section>
      <hr className="w-full" />

      {(dataone || datatwo) && (
        <>
          <section className="flex justify-center items-center gap-6 p-6">
            {dataone && (
              <div>
                <p className="font-bold text-blue-700 text-4xl">
                  {dataone.data}
                </p>
                <p className="font-bold text-blue-700 text-4xl">
                  {dataone.value} +
                </p>
              </div>
            )}
            {datatwo && (
              <div>
                <p className="font-bold text-blue-700 text-4xl">
                  {datatwo.data}
                </p>
                <p className="font-bold text-blue-700 text-4xl">
                  {datatwo.value} +
                </p>
              </div>
            )}
          </section>
          <hr className="w-full" />
        </>
      )}

      <section className="flex justify-start w-full gap-6 py-6">
        <a href={href}>
          <button className="py-2 px-4 border-[1px] border-black rounded-md">
            <p className="text-black font-medium text-2xl">{buttonText}</p>
          </button>
        </a>
      </section>
    </section>
  );
};

export default GridContent;
