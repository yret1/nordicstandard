import temphouse from "../assets/Temphouse.jpg";
import Location from "../assets/Location.svg";
const ReviewCard = () => {
  return (
    <a className="cursor-pointer hover:scale-105 transition-all">
      <article className="relative w-11/12 h-52 bg-white md:w-96 md:h-80 overflow-hidden rounded-lg">
        <img src={temphouse} className="object-cover h-full" />

        <section className="flex justify-start items-center absolute top-1 left-1 bg-black rounded-lg overflow-hidden p-2">
          <p className="font-poppins text-xl text-white">Brighton, UK</p>
          <img src={Location} className="w-6 h-6" />
        </section>

        <section className="absolute w-full h-12 md:h-20 bg-black bg-opacity-60 z-20 bottom-0 left-0 flex justify-between items-center">
          <section className="flex-col p-4">
            <q className="font-bold text-white font-poppins">
              An amazing experience. Higly recommended!
            </q>
            <p className="font-poppins text-white text-opacity-40">
              Simon, Sweden
            </p>
          </section>
        </section>
      </article>
    </a>
  );
};

export default ReviewCard;
