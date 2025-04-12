import Logo from "./logo/Logo.tsx";
import Button from "./Button.tsx";
import {useState} from "react";

export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false)

  const links = {
    about: {
      label: "درباره"
    },
    supporters: {
      label: "حامیان جشنواره"
    },
    faq: {
      label: "سوالات متداول"
    },
    support: {
      label: "ارتباط با دبیرخانه"
    },
  }


  return (
    <div className={"flex w-full px-6 md:px-0 h-full gap-6"}>

      <div className={"w-full flex items-center justify-between  md:w-fit"}>
        <Logo size={60}/>

        <svg onClick={() => {
          setShowMenu(true)
        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6 md:hidden block">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
        </svg>

      </div>


      <div
        style={{
          transition: "all 0.3s ease-in-out",
        }}
        className={`bg-white fixed ${showMenu ? "left-0" : "left-[-500px]"} transition top-0 z-50 rounded-none md:relative md:right-0  md:flex justify-between h-full px-8 pl-3 items-center !w-[50%] md:rounded-4xl py-12 md:py-2 w-[400px]`}>


        <div onClick={() => {
          setShowMenu(false)
        }} className={"absolute md:hidden left-2 top-2 z-[55]"}>
          <span className={"text-xl "}>x</span>
        </div>


        <div className={"flex flex-col md:flex-row  gap-8"}>
          {Object.entries(links).map(([key, value]) => {
            let {label} = value;
            return (
              <span key={key}>
                {label}
            </span>
            )
          })}
        </div>
        <div className={"my-8 md:my-0"}>
          <a href="#">
            <Button >
              ورود به پنل
            </Button>
          </a>

        </div>

      </div>
    </div>
  )
}
