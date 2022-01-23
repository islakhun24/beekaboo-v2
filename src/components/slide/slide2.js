import bgpink from "../../assets/background/bg-pink.svg";

const Slide2 = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${bgpink})`,
        height: '100vh',
        fontFamily: 'Sniglet',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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

export default Slide2;
