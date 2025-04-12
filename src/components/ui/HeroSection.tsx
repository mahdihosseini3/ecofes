import NavBar from "./NavBar.tsx";
import Button from "./Button.tsx";

const HeroSection = () => {
  return (
    <div style={{borderRadius: "14% 0% 0% 100% / 0% 48% 13% 20% "}}
         className={"bg-gradient-to-r from-[#F7DFD1] to-[#E7DFDA] overflow-hidden w-full flex flex-col gap-6  h-[550px] w-full"}>

      <div className={"flex py-5 container w-full mx-auto"}>
        <NavBar/>
      </div>

      <div className={"relative container w-full h-full flex justify-between mx-auto"}>
        <div className={'w-full flex-col gap-8 px-24 flex mt-24 h-full'}>
          <h1 className={"text-5xl leading-[1.25] font-bold "}> جشنواره ملی <br/>بومگردی های ایران</h1>
          <p className={"text-[#5E5E5E] max-w-10/12"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.</p>

          <Button className={"w-fit !px-8 "}>
            ثبت نام کنید
          </Button>
        </div>
        <div className={'w-full h-full flex w-full items-end justify-center'}>
          <div className={"w-[80%] mb-20 mx-auto"}>
            <img src="/images/hero/Group%2037.svg" className={"w-full"} alt="hreo_image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;