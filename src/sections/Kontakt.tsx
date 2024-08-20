import { useState } from "react";

const Kontakt = () => {
  const [submitting, setSubmitting] = useState(false);

  const [result, setResult] = useState("Send melding");
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
        setResult("Send melding");
      });
    } else setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const key = "f49afa23-f5e6-49c4-8895-625a1fa356a1";

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
        setResult("Send melding");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="kontakt"
      className="w-screen justify-center items-start gap-6 flex flex-col md:flex-row p-6 bg-slate-50"
    >
      <section className="w-full md:w-5/12 pt-10 md:py-20 flex flex-col justify-start items-start">
        <p className="text-black text-opacity-35 font-light font-infant pb-4">
          Kontakt oss
        </p>
        <hr className="w-full border-contact" />
        <p className="text-contact text-4xl font-comorant pt-10">
          Kontakt oss for en uforpliktende samtale
        </p>
      </section>

      <section className="w-full md:w-5/12 py-20 flex flex-col justify-start items-start">
        <p className="text-optext text-opacity-35 font-light font-infant pb-4">
          Din informasjon
        </p>
        <hr className="w-full border-contact" />

        <form className="w-full pt-12" onSubmit={(e) => onSubmit(e)}>
          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="name"
                className="text-black font-comorant font-bold pb-4"
              >
                Navn*
              </label>
              <input
                autoComplete="name"
                required
                onChange={(e) => setMail({ ...mail, name: e.target.value })}
                value={mail.name}
                type="text"
                id="name"
                name="name"
                placeholder="For- og etternavn"
                className="w-full font-infant p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
            <section className="w-full">
              <label
                htmlFor="tel"
                className="text-black font-comorant font-bold pb-4"
              >
                Tel
              </label>
              <input
                onChange={(e) => setMail({ ...mail, phone: e.target.value })}
                autoComplete="phone"
                value={mail.phone}
                type="text"
                id="tel"
                name="tel"
                placeholder="Tel: 1234 5678"
                className="w-full font-infant p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex md:flex-row flex-col justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-comorant font-bold pb-4"
              >
                E-post*
              </label>
              <input
                autoComplete="email"
                onChange={(e) => setMail({ ...mail, email: e.target.value })}
                value={mail.email}
                type="email"
                required
                id="email"
                name="email"
                placeholder="E-post"
                className="w-full font-infant p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <label
                htmlFor="email"
                className="text-black font-comorant font-bold pb-4"
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
                className="w-full font-infant p-4 border-[1px] border-borders rounded-md active:border-buttonhover"
              />
            </section>
          </fieldset>

          <fieldset className="w-full py-2 flex justify-center gap-6">
            <section className="w-full">
              <button
                type="submit"
                className="w-full font-infant lg:w-6/12 py-2 px-4 h-14 rounded-md flex justify-center items-center bg-contact border-2 border-contact hover:bg-transparent hover:text-contact transition-all duration-100 text-2xl font-medium text-herosub"
              >
                {submitting && <p>Sender...</p>}
                {!submitting && result && <p>{result}</p>}
                {!submitting && !result && !sent && <p>Send melding</p>}
              </button>
            </section>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default Kontakt;
