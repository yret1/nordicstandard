interface AuthorCardProps {
  name: string;
  title?: string;
  img: string;
  about?: string;
  background?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  about,
  background,
  img,
  name,
  title,
}) => {
  return (
    <article className="w-full bg-cardbg h-auto border-[1px] border-slate-200 rounded-md shadow-md">
      <figure className="w-full  overflow-hidden p-4">
        <img
          src={img}
          alt={`${name} profile image`}
          className="h-full w-full object-cover aspect-square object-center rounded-md"
        />
      </figure>
      <section className="w-full p-4 lg:p-6 flex flex-col gap-4">
        <p className="text-Head font-bold font-poppins text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-accent font-medium font-poppins text-lg lg:text-2xl">
          {title}
        </p>

        {background && (
          <section>
            <p className="text-head font-sans text-lg lg:text-xl font-bold">
              Background
            </p>
            <p className="text-sub text-sm lg:text-lg">{background}</p>
          </section>
        )}

        {about && (
          <section>
            <p className="text-head font-sans text-lg lg:text-xl font-bold">
              About
            </p>
            <p className="text-sub text-sm lg:text-lg">{about}</p>
          </section>
        )}
      </section>
    </article>
  );
};

export default AuthorCard;
