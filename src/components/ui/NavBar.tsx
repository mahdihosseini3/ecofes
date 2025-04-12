import Logo from "./logo/Logo.tsx";
import Button from "./Button.tsx";

export default function NavBar() {

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
    <div className={"flex w-full h-full gap-6"}>
      <Logo size={60}/>
      <div
        className={"bg-white flex justify-between h-full px-8 pl-3 items-center !w-[50%] rounded-4xl py-2 w-[400px]"}>
        <div className={"flex gap-8"}>
          {Object.entries(links).map(([key, value]) => {
            let {label} = value;
            return (
              <span key={key}>
                {label}
            </span>
            )
          })}
        </div>
        <div>
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
