import { useState } from "react";

const Kontakt = () => {
  const [submitting, setSubmitting] = useState(false);

  const [result, setResult] = useState("Send Message");
  const [sent, setSent] = useState(false);
  const [mail, setMail] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mail.name == "" || mail.email == "" || mail.message == "") {
      setResult("Please fill in all fields");

      setTimeout(() => {
        setResult("Send Message");
      });
    } else setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const key = "9c4cd1b2-5807-456a-b38c-af7a1279bbaf";

    formData.append("access_key", `${key}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent");
      setMail({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setSubmitting(false);
      setSent(true);

      setTimeout(() => {
        setResult("Send Message");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
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

        <form className="w-full" onSubmit={(e) => onSubmit(e)}>
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
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                value={mail.name}
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="tel"
                className="text-black font-poppins font-medium pb-4"
              >
                Telephone Number
              </label>
              <input
                onChange={(e) => setMail({ ...mail, phone: e.target.value })}
                value={mail.phone}
                type="text"
                id="tel"
                name="tel"
                placeholder="+12 345 678"
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
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                value={mail.email}
                type="email"
                required
                id="email"
                name="email"
                placeholder="Email Address"
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
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
                value={mail.message}
                id="message"
                name="message"
                placeholder="What can we do for you?"
                cols={60}
                className="w-full p-4 border-[1px] border-slate-200 rounded-md active:border-blue-600"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <button
                type="submit"
                className="w-full md:w-6/12 py-2 px-4 h-14 rounded-md flex justify-center items-center bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-100 text-2xl font-medium text-white"
              >
                {submitting && <p>Sending...</p>}
                {!submitting && result && <p>{result}</p>}
                {!submitting && !result && !sent && <p>Send Message</p>}
              </button>
            </section>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default Kontakt;
