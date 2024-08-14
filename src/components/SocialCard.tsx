import Star from "../assets/Star.svg";

interface SocialCardProps {
  name: string;
  title?: string;
  img?: string;
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
    <article className="w-full h-full border-[1px] border-slate-200 shadow-lg rounded-lg p-4 md:p-6 lg:p-8 flex bg-cardbg flex-col justify-start items-start">
      <section className="w-full flex justify-start items-center gap-4">
        {img && (
          <div className="w-2/12 rounded-full overflow-hidden border-2 border-slate-200 shadow-md">
            <img
              src={img}
              alt="Profile picture"
              className="w-full object-cover aspect-square object-center"
            />
          </div>
        )}

        <p className="font-bold text-contac font-comorant text-sm md:text-lg lg:text-2xl">
          {name}
        </p>
      </section>

      <section className="w-screen flex justify-start items-center py-2 gap-2">
        {[...Array(rating)].map((_, index) => (
          <img
            src={Star}
            alt={`Rating star ${index}`}
            key={"star key" + index}
            className="h-6 w-6"
          />
        ))}
      </section>

      <section className="w-full flex justify-start items-center py-2 gap-2">
        <p className="font-normal font-infant text-sub text-wrap text-lg">
          {review}
        </p>
      </section>
    </article>
  );
};

export default SocialCard;
