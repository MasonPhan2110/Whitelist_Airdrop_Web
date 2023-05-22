const HeroSection = () => {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat  text-xl lg:min-h-screen"
    style={{ backgroundColor: "rgb(0,0,50)" }}
    >
      <div className="container flex h-full flex-col pt-24 lg:hidden">
        <h1 className="font-pepe text-xl text-white">
          <span className="text-2xl">Claim Airdrop</span> <br />
        </h1>

        {/* <div className="flex flex-col items-center justify-center">
          <h1 className="font-pepe text-6xl text-white">For MEME JUSTICES</h1>
          <p className="w-full text-left font-Inter text-4xl font-light text-[#A3A8A8]">
            Description
          </p>
         
        </div> */}
      </div>
      <div className="container-lg hidden h-screen items-end lg:flex">
        <div className="flex h-full w-2/6 flex-1 flex-col items-center justify-center pt-20">
          <h1 className=" font-pepe text-4xl text-white">
            <span className="text-5xl">Claim Airdrop</span> <br />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
