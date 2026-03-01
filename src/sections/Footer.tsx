import { links } from "../components/Header";

const Footer = () => {
  return (
    <section className="w-screen shadow-inner">
      <section className="flex w-full justify-between flex-col bg-slate-900 pt-12">
        <section className="flex flex-col md:flex-row">
          <section className="flex flex-col justify-start items-start text-left w-full p-4">
            <p className="text-herohead font-bold font-comorant text-2xl">
              Nordisk Standard
              <br />
              <span className="text-lg font-normal font-comorant text-herohead">
                Din Boligpartner
              </span>
            </p>
            <p className="text-herosub font-normal font-infant text-opacity-45">
              Maridalsveien 39 A <br />
              0175 Oslo
            </p>
          </section>

          <section className="w-full p-4 flex flex-col gap-2">
            <p className="font-bold font-comorant text-herohead text-lg">
              Navigate
            </p>
            <ul className="flex flex-col gap-2 justify-start items-start md:flex-row">
              {links.map((item, index) => (
                <li
                  key={index + item.href}
                  className="text-white font-infant text-opacity-45 cursor-pointer hover:text-opacity-100"
                >
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>

            <section>
              <p className="font-bold text-herohead font-comorant text-lg">
                Socials
              </p>
              <ul className="flex flex-col gap-2 justify-start items-start md:items-center md:flex-row p-2">
                <li>
                  <a
                    href="https://www.airbnb.com/users/show/56021483"
                    aria-label="Link to Airbnb Profile"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="text-herohead font-poppins text-opacity-45 w-8 h-8 cursor-pointer group hover:text-opacity-100"
                  >
                    <svg
                      className="group-hover:stroke-contact fill-white group-hover:fill-contact transition-all"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#FFFFFF"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12.001 16.709c-1.013-1.271-1.609-2.386-1.808-3.34-.197-.769-.12-1.385.218-1.848.357-.532.89-.791 1.589-.791s1.231.259 1.589.796c.335.458.419 1.075.215 1.848-.218.974-.813 2.087-1.808 3.341l.005-.006zm7.196.855c-.14.934-.775 1.708-1.65 2.085-1.687.734-3.359-.437-4.789-2.026 2.365-2.961 2.803-5.268 1.787-6.758-.596-.855-1.449-1.271-2.544-1.271-2.206 0-3.419 1.867-2.942 4.034.276 1.173 1.013 2.506 2.186 3.996-.735.813-1.432 1.391-2.047 1.748-.478.258-.934.418-1.37.456-2.008.299-3.582-1.647-2.867-3.656.1-.259.297-.734.634-1.471l.019-.039c1.097-2.382 2.43-5.088 3.961-8.09l.039-.1.435-.836c.338-.616.477-.892 1.014-1.231.258-.157.576-.235.934-.235.715 0 1.271.418 1.511.753.118.18.259.419.436.716l.419.815.06.119c1.53 3.001 2.863 5.702 3.955 8.089l.02.019.401.915.237.573c.183.459.221.915.16 1.393l.001.002zm.913-1.791c-.139-.438-.378-.953-.675-1.569v-.022a262.99 262.99 0 0 0-3.976-8.128l-.084-.121C14.486 4.109 13.849 3.014 12 3.014c-1.827 0-2.604 1.27-3.397 2.922l-.061.119c-1.251 2.426-2.564 5.128-3.975 8.13v.039l-.418.914c-.158.378-.237.575-.259.636C2.878 18.556 4.964 21 7.489 21c.021 0 .099 0 .198-.021h.278c1.313-.159 2.664-.993 4.035-2.485 1.371 1.49 2.725 2.326 4.033 2.485h.279c.1.021.18.021.2.021 2.525.002 4.61-2.444 3.598-5.227z"></path>
                      </g>
                    </svg>
                  </a>
                </li>

<li>
  <a
    href="https://www.instagram.com/nordiskstandard"
    aria-label="Link to Instagram Profile"
    referrerPolicy="no-referrer"
    target="_blank"
    className="text-herohead font-poppins group text-opacity-45 w-8 h-8 cursor-pointer hover:text-opacity-100"
  >
    <svg
      viewBox="0 0 24 24"
      className="group-hover:stroke-contact fill-white group-hover:fill-contact w-8 h-8 transition-all"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path>
      </g>
    </svg>
  </a>
</li>

                {/*     <a className="text-herohead flex justify-center items-center font-poppins group text-opacity-45 cursor-pointer hover:text-opacity-100">
                  <svg
                    className="group-hover:stroke-contact stroke-white   w-9 h-9 transition-all"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="132"
                        height="132"
                        x="30"
                        y="30"
                        strokeWidth="12"
                        rx="16"
                      ></rect>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="12"
                        d="M66 86v44"
                      ></path>
                      <circle
                        cx="66"
                        cy="64"
                        r="8"
                        className="group-hover:fill-contact fill-white"
                      ></circle>
                      <path
                        strokeLinecap="round"
                        strokeWidth="12"
                        d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
                      ></path>
                    </g>
                  </svg>
                </a>*/}
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
