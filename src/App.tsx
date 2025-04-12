import './App.css'
import Footer from './components/ui/Footer'
import HeroSection from "./components/ui/HeroSection.tsx";
import FAQSection from "./components/ui/FAQSection.tsx";
import Sponsors from "./components/ui/Sponsors.tsx";


function App() {


    return (
        <div className={""}>
            <HeroSection/>
            <Sponsors/>
            <FAQSection/>
            <Footer/>
        </div>
    )
}

export default App
