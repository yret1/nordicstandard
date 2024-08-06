interface GridImgProps {
  img: string;
  pos: string;
  ver?: string;
  cover?: boolean;
  alt: string;
}

const GridImg: React.FC<GridImgProps> = ({ img, pos, ver, cover, alt }) => {
  return (
    <section
      className={`relative w-full bg-white  ${
        ver == "2" ? "h-60" : "md:h-full h-80 max-h-96"
      } rounded-lg overflow-hidden shadow-md`}
    >
      <img
        src={img}
        alt={alt}
        className={`"absolute top-0 left-0 w-full aspect-square h-full ${
          cover ? "object-contain" : "object-cover"
        } ${pos}`}
      />
    </section>
  );
};

export default GridImg;
