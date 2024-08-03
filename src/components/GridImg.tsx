interface GridImgProps {
  img: string;
  pos: string;
  ver?: string;
}

const GridImg: React.FC<GridImgProps> = ({ img, pos, ver }) => {
  return (
    <section
      className={`relative w-full  ${
        ver == "2" ? "h-60" : "md:h-full h-80 max-h-96"
      } rounded-lg overflow-hidden shadow-md`}
    >
      <img
        src={img}
        className={`"absolute top-0 left-0 w-full aspect-square h-full object-cover ${pos}`}
      />
    </section>
  );
};

export default GridImg;
