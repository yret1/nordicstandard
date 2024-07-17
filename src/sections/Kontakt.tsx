import { useState } from "react";
import Loading from "../assets/Anims/Loading.json";
import Lottie from "lottie-react";
const Kontakt = () => {
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState(false);

  const [mail, setMail] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    properties: 0,
    locations: 0,
    message: "",
  });

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = {
      name: mail.name,
      company: mail.company,
      email: mail.email,
      country: mail.country,
      properties: mail.properties,
      locations: mail.locations,
      message: mail.message,
    };

    try {
      setSubmitting(true);
    } catch (error) {
      setSubmitting(false);
      setError(true);
    }
  };

  return (
    <section
      id="kontakt"
      className="w-screen justify-center items-start gap-6 flex flex-col md:flex-row p-6 bg-slate-100"
    >
      <section className="w-full md:w-5/12 pt-10 md:py-20 flex flex-col justify-start items-start">
        <p className="text-black text-opacity-35 font-light font-poppins pb-4">
          Contact us
        </p>
        <hr className="w-full border-blue-400" />
        <p className="text-blue-500 text-4xl font-poppins pt-10">
          Let's talk anywhere you are.
        </p>
      </section>

      <section className="w-full md:w-5/12 py-20 flex flex-col justify-start items-start">
        <p className="text-black text-opacity-35 font-light font-poppins pb-4">
          Request Information
        </p>
        <hr className="w-full border-blue-400" />

        <p className="text-black text-opacity-55 font-poppins font-medium font-2xl pt-10">
          Whether looking for more information or ready to partner with us,
          we're here to guide you through every step of the process.
        </p>

        <form className="w-full" action={(e: React.FormEvent) => Submit(e)}>
          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="name"
                className="text-black font-poppins font-medium pb-4"
              >
                Name*
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="company"
                className="text-black font-poppins font-medium pb-4"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-poppins font-medium pb-4"
              >
                Email*
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="name"
                className="text-black font-poppins font-medium pb-4"
              >
                Country*
              </label>
              <select
                id="name"
                required
                name="name"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              >
                <option defaultChecked value="Norway">
                  Norway
                </option>
                <option value="Sweden">Sweden</option>

                <option value="Denmark">Denmark</option>
              </select>
            </section>
          </fieldset>

          <fieldset className="w-full py-2 md:flex-row flex-col flex justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="properties"
                className="text-black font-poppins font-medium pb-4"
              >
                Number of properties*
              </label>
              <input
                required
                type="number"
                id="properties"
                name="properties"
                placeholder="Please enter a number"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-poppins font-medium pb-4"
              >
                Number of locations*
              </label>
              <input
                required
                type="number"
                id="locations"
                name="locations"
                placeholder="How many different locations?"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-poppins font-medium pb-4"
              >
                Your message*
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="What can we do for you?"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <button
                type="submit"
                className="w-full md:w-6/12 py-2 px-4 h-14 rounded-md bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-100 text-2xl font-medium text-white"
              >
                {submitting ? (
                  <Lottie animationData={Loading} />
                ) : (
                  <p>Send Message</p>
                )}
              </button>
            </section>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default Kontakt;
