import temphouse from "../assets/Temphouse.jpg";
import Profile from "../assets/Profile.png";
const ReviewCard = () => {
  return (
    <article className="w-full h-full rounded-md overflow-hidden relative shadow-md hover:scale-105 hover:rotate-3 transition-all duration-150">
      <img src={temphouse} />

      <section className="absolute top-2 left-2 flex justify-start items-center gap-2 text-white font-poppins p-2 rounded-md">
        <div className="h-10 w-10 border-2 border-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] rounded-full overflow-hidden bg-white">
          <img src={Profile} />
        </div>
        <p className="text-white font-bold font-poppins drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Simon G
        </p>
      </section>

      <q className="font-poppins text-white font-bold absolute text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bottom-2 left-2 p-4">
        Working with Nordisk Standard is a hassle free experience. They handle
        it all and my revenue has greatly increased since the start of our
        collaboration!
      </q>
    </article>
  );
};

export default ReviewCard;
