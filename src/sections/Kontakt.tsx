import { useState } from "react";

const Kontakt = () => {
  const [submitting, setSubmitting] = useState(false);

  const [result, setResult] = useState("Sende melding");
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
        setResult("Sende melding");
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
      setResult("Melding sendt");
      setMail({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setSubmitting(false);
      setSent(true);

      setTimeout(() => {
        setResult("Sende melding");
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
          Kontakt oss
        </p>
        <hr className="w-full border-accent" />
        <p className="text-accent text-4xl font-poppins pt-10">
          Bli våran boligparnet
        </p>
      </section>

      <section className="w-full md:w-5/12 py-20 flex flex-col justify-start items-start">
        <p className="text-optext text-opacity-35 font-light font-poppins pb-4">
          Din informasjon
        </p>
        <hr className="w-full border-accent" />

        <p className="text-optext text-opacity-55 font-poppins font-medium font-2xl pt-10">
          Klar for neste trinn? Ta kontakt med oss for å diskutere din bolig.
        </p>

        <form className="w-full" onSubmit={(e) => onSubmit(e)}>
          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="name"
                className="text-black font-poppins font-medium pb-4"
              >
                Navn*
              </label>
              <input
                required
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                value={mail.name}
                type="text"
                id="name"
                name="name"
                placeholder="Fullt navn"
                className="w-full p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="tel"
                className="text-black font-poppins font-medium pb-4"
              >
                Tel
              </label>
              <input
                onChange={(e) => setMail({ ...mail, phone: e.target.value })}
                value={mail.phone}
                type="text"
                id="tel"
                name="tel"
                placeholder="+12 345 678"
                className="w-full p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-poppins font-medium pb-4"
              >
                E-post*
              </label>
              <input
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                value={mail.email}
                type="email"
                required
                id="email"
                name="email"
                placeholder="e-post"
                className="w-full p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-poppins font-medium pb-4"
              >
                Din beskjed*
              </label>
              <textarea
                required
                onChange={(e) => setMail({ ...mail, message: e.target.value })}
                value={mail.message}
                id="message"
                name="message"
                placeholder="Hva kan vi gjøre for deg?"
                cols={60}
                className="w-full p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <button
                type="submit"
                className="w-full md:w-6/12 py-2 px-4 h-14 rounded-md flex justify-center items-center bg-poopgreen border-2 border-poopgreen hover:bg-transparent hover:text-poopgreen transition-all duration-100 text-2xl font-medium text-herosub"
              >
                {submitting && <p>Sender...</p>}
                {!submitting && result && <p>{result}</p>}
                {!submitting && !result && !sent && <p>Sende melding</p>}
              </button>
            </section>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default Kontakt;
