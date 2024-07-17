import { useEffect, useState } from "react";

interface WhyboxProps {
  index: number;
  text: string;
  img: string;
  title: string;
}

const Whybox: React.FC<WhyboxProps> = ({ img, index, text, title }) => {
  const [type, setType] = useState(false);

  useEffect(() => {
    if (index % 2 === 0) {
      setType(true);
    }
  }, []);
  return (
    <>
      {type ? (
        <section className="flex flex-col md:flex-row justify-center w-screen gap-7 items-center p-10">
          <section>
            <div className="h-80 w-80 border-2 rounded-full overflow-hidden">
              <img src={img} className="h-full object-cover" />
            </div>
          </section>
          <section>
            <h4 className="text-white font-bold font-poppins text-3xl">
              {title}
            </h4>
            <p className="text-white font-medium font-poppins text-xl">
              {text}
            </p>
          </section>
        </section>
      ) : (
        <section className="flex flex-col md:flex-row-reverse justify-center w-screen gap-7 items-center p-10">
          <section>
            <div className="h-80 w-80 border-2 rounded-full overflow-hidden">
              <img src={img} className="h-full object-cover" />
            </div>
          </section>
          <section>
            <h4 className="text-white font-bold font-poppins text-3xl">
              {title}
            </h4>
            <p className="text-white font-medium font-poppins text-xl">
              {text}
            </p>
          </section>
        </section>
      )}
    </>
  );
};

export default Whybox;
