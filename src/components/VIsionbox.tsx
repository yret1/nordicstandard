const VIsionbox = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center lg:pt-20 ">
      <div className="rounded-full overflow-hidden w-10/12 md:w-7/12 lg:w-3/12 aspect-square shadow-lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1661301048422-2b03f950f8af?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tessie and Samir image"
          className="object-cover w-full h-full"
        />
      </div>
      <article className="w-10/12 flex flex-col gap-6 justify-center items-center">
        <h5 className="text-center font-comorant font-bold text-contact text-3xl md:text-5xl pt-12">
          Hvem er då vi
        </h5>
        <p className="text-center lg:w-6/12 font-infant text-2xl md:text-3xl text-black">
          Vi har lang og god erfaring fra salg-, servicebransjen. Vi har jobbet
          innenfor hotell- og service siden 2012, samt drevet med langsiktig
          utleie siden 2013.
        </p>
      </article>
    </section>
  );
};

export default VIsionbox;
