const GridImg = ({ img }: { img: string }) => {
  return (
    <section className="relative w-full md:h-full h-80 max-h-96 md:max-h-max rounded-lg overflow-hidden shadow-md">
      <img
        src={img}
        className="absolute top-0 left-0 w-full h-full object-top object-cover"
      />
    </section>
  );
};

export default GridImg;
