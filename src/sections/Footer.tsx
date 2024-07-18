const Footer = () => {
  return (
    <section>
      <section className="flex w-screen justify-between flex-wrap bg-blue-700">
        <section className="flex flex-col justify-start items-center text-left p-4">
          <p className="text-white font-bold font-poppins">Nordisk Standard</p>
          <p className="text-white font-normal font-poppins text-opacity-45">
            Maridalsveien 39 A <br />
            0175 Oslo
          </p>
        </section>

        <hr className="w-screen" />

        <section className="flex justify-center items-center w-screen  p-2">
          <p className="text-white text-sm text-opacity-30">
            @2024 Nordisk Standard AS all rights reserved.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Footer;
