const Header = () => {
  return (
    <header className="w-screen h-12 z-20 flex flex-col gap-5 justify-center items-center absolute top-0 left-0 bg-transparent p-10">
      <section className="flex justify-center items-center px-5 pt-12 w-full">
        <h1 className="text-white font-bold text-4xl text-nowrap">
          Nordisk Standard
        </h1>
      </section>
      <section>
        <ul className="w-full justify-center flex items-center gap-5">
          <li className="cursor-pointer text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
            Erfaring Og Meriter
          </li>
          <li className="cursor-pointer text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
            Om Oss
          </li>
          <li className="cursor-pointer text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
            Tjenester
          </li>
          <li className="cursor-pointer text-white font-sans border-b-2 border-transparent hover:border-white transition-all">
            Kontakt
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
