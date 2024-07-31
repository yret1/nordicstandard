import { links } from "../components/Header";

const Footer = () => {
  return (
    <section className="w-screen shadow-inner">
      <section className="flex w-full justify-between flex-col bg-accent">
        <section className="flex flex-col md:flex-row">
          <section className="flex flex-col justify-start items-start text-left w-full p-4">
            <p className="text-herohead font-bold font-poppins text-2xl">
              Nordisk Standard
              <br />
              <span className="text-lg font-normal text-herohead">
                Din Airbnb Partner
              </span>
            </p>
            <p className="text-herosub font-normal font-poppins text-opacity-45">
              Maridalsveien 39 A <br />
              0175 Oslo
            </p>
          </section>

          <section className="w-full p-4 flex flex-col gap-2">
            <p className="font-bold text-herohead text-lg">Navigate</p>
            <ul className="flex flex-col gap-2 justify-start items-start md:flex-row">
              {links.map((item, index) => (
                <a key={index} href={item.href}>
                  <li className="text-white font-poppins text-opacity-45 cursor-pointer hover:text-opacity-100">
                    {item.text}
                  </li>
                </a>
              ))}
            </ul>

            <section>
              <p className="font-bold text-herohead text-lg">Socials</p>
              <ul className="flex flex-col gap-2 justify-start items-start md:flex-row">
                <li className="text-herohead font-poppins text-opacity-45 cursor-pointer hover:text-opacity-100">
                  Airbnb
                </li>
                <li className="text-herohead font-poppins text-opacity-45 cursor-pointer hover:text-opacity-100">
                  Airbnb
                </li>
                <li className="text-herohead font-poppins text-opacity-45 cursor-pointer hover:text-opacity-100">
                  Airbnb
                </li>
                <li className="text-herohead font-poppins text-opacity-45 cursor-pointer hover:text-opacity-100">
                  Airbnb
                </li>
              </ul>
            </section>
          </section>
        </section>

        <section className="flex justify-center items-center w-screen md:justify-start  p-2">
          <p className="text-white text-sm text-opacity-30">
            @2024 Nordisk Standard AS all rights reserved.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Footer;
