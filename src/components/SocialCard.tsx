import Star from "../assets/Star.svg";

interface SocialCardProps {
  name: string;
  title?: string;
  img: string;
  rating: number;
  review: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  name,
  img,
  rating,
  review,
}) => {
  return (
    <article className="w-full h-full border-[1px] border-black shadow-lg rounded-lg p-4 md:p-6 lg:p-8 flex bg-white flex-col justify-start items-start">
      <section className="w-full flex justify-start items-center gap-4">
        <div className="w-2/12 rounded-full overflow-hidden border-2 border-black">
          <img
            src={img}
            alt="Profile picture"
            className="w-full object-cover"
          />
        </div>

        <p className="font-bold text-black text-sm md:text-lg lg:text-2xl">
          {name}
        </p>
      </section>

      <section className="w-screen flex justify-start items-center py-2 gap-2">
        {[...Array(rating)].map((_, index) => (
          <img src={Star} alt={`Rating star ${index}`} className="h-6 w-6" />
        ))}
      </section>

      <section className="w-full flex justify-start items-center py-2 gap-2">
        <p className="font-bold text-black text-wrap">{review}</p>
      </section>
    </article>
  );
};

export default SocialCard;
