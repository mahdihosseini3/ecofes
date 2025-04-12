const HeroSection = () => {
  return (
    <div style={{borderRadius: "14% 0% 0% 100% / 0% 48% 13% 20% ", boxShadow: "0 1px 1px #222"}}
         className={"bg-gradient-to-r from-[#F7DFD1] to-[#E7DFDA] overflow-hidden w-full flex flex-col gap-6  h-[550px] w-full"}>

      <div className={"flex container mx-auto"}>
        navbar
      </div>

      <div className={"relative container w-full h-full flex justify-between mx-auto"}>
        <div className={'w-full  h-full'}>
          HELLO WORLD
        </div>
        <div className={'w-full h-full flex w-full items-end justify-center'}>
          <div className={"w-[70%] -mb-8 mx-auto"}>
            <img src="/images/hero/Group%2037.svg" className={"w-full"} alt="hreo_image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;