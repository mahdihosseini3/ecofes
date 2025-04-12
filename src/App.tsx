import './App.css'
import Footer from './components/ui/Footer'
import HeroSection from "./components/ui/HeroSection.tsx";
import ImageCarousel from "./components/slider/ImageCarousel.tsx";
import FAQSection from "./components/ui/FAQSection.tsx";
import Sponsors from "./components/ui/Sponsors.tsx";


function App() {


  return (
    <div className={"bg-[#FFEFE4] "}>
      <HeroSection/>

      <div className={"container h-[500px] flex flex-col gap-2 items-center  mx-auto"}>
        <div className={"text-center py-12"}>
          <h4 className={"text-4xl font-bold text-[#454545]"}>درباره جشنواره</h4>
        </div>
        <p className={"w-10/12  text-justify md:text-center leading-[1.8] font-semibold text-[#303030]"}>
          اولین دوره جشنواره ملی بومگردی ایران در قلب استان کرمان، میزبان شماست! این رویداد منحصر به فرد، فرصتی استثنایی
          برای کشف زیبایی‌های طبیعی، آشنایی با فرهنگ غنی و تجربه زندگی به سبک بومگردی در یکی از دیدنی‌ترین مناطق ایران
          است.
        </p>
      </div>
      <div className={"bg-white relative "}>
        <ImageCarousel/>
      </div>
      <Sponsors/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App
