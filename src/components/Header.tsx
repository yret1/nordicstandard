const Header = () => {
  return (
    <header className="w-screen h-12 z-20 flex flex-col justify-center items-center absolute top-0 left-0 bg-transparent p-10">
      <section className="flex justify-center items-center p-5 ">
        <h1 className="text-white font-bold text-4xl">Nordisk Standard</h1>
      </section>
      <section>
        <ul className="w-full justify-center flex items-center gap-5">
          <li className="cursor-pointer text-white font-sans">
            Erfaring Og Meriter
          </li>
          <li className="cursor-pointer text-white font-sans">Om Oss</li>
          <li className="cursor-pointer text-white font-sans">Tjenester</li>
          <li className="cursor-pointer text-white font-sans">Kontakt</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
