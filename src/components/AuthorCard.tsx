interface AuthorCardProps {
  name: string;
  title: string;
  img: string;
  about: string;
  background: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  about,
  background,
  img,
  name,
  title,
}) => {
  return (
    <article className="w-full h-auto border-[1px] border-black rounded-md shadow-md">
      <figure className="w-full h-60 md:h-72 lg:h-96 overflow-hidden p-4">
        <img
          src={img}
          alt={`${name} profile image`}
          className="h-full w-full object-cover object-center rounded-md"
        />
      </figure>
      <section className="w-full p-4 flex flex-col gap-4">
        <p className="text-black font-bold font-poppins text-xl">{name}</p>
        <p className="text-blue-700 font-medium font-poppins text-lg">
          {title}
        </p>

        <section>
          <p className="text-black font-sans text-lg font-bold">Background</p>
          <p>{background}</p>
        </section>

        <section>
          <p className="text-black font-sans text-lg font-bold">About</p>
          <p>{about}</p>
        </section>
      </section>
    </article>
  );
};

export default AuthorCard;
