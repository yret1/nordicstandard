import Kontakt from "../components/Kontakt";
import Whybox from "../components/Whybox";

const Why = () => {
  const dataList = [
    {
      title: "Ökade Intäkter",
      text: "I genomsnitt tjänar våra partners 30% mer på sina boende!",
      img: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRpcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Mindre Arbete",
      text: "Vi sköter allt från incheckning till städning och underhåll. Du kan luta dig tillbaka och njuta av dina intäkter.",
      img: "https://images.unsplash.com/photo-1712746438791-ccf70478e0d0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bättre Säkerhet",
      text: "Vi ser till att ditt boende är säkert och att gästerna följer reglerna. Vi har en nolltolerans mot störande beteende.",
      img: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="bg-[#0e49ff] w-screen min-h-screen flex flex-col justify-start py-10 items-center pb-20">
      <section className="w-screen">
        <h4 className="text-white font-poppins text-3xl font-bold text-center">
          Hvorfor <br />
          <span className="text-5xl"> Nordisk Standard</span>
        </h4>
      </section>

      <section className="flex flex-col justify-center w-screen items-center">
        {dataList.map((data, index) => (
          <Whybox
            key={index}
            index={index}
            title={data.title}
            text={data.text}
            img={data.img}
          />
        ))}
      </section>
      <Kontakt />
    </section>
  );
};

export default Why;
