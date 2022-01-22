import bgpurple from "../../assets/background/bg-purple.svg";

const Slide3 = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${bgpurple})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        color: "#fff000",
      }}
    >
      <div className="flex flex-row">
        
        <div
          style={{ fontFamily: "Sniglet" }}
          className="flex flex-col text-6xl text-white items-center justify-center flex-grow"
        >
          <div className="mt-24">Wellcome to</div>
          <div>Beekaboo Family</div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
