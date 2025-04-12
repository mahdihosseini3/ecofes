import {ButtonHTMLAttributes, ReactNode} from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...props}
      className={"bg-primary cursor-pointer hover:opacity-80 transition active:opacity-100 px-6 text-white h-[40px] rounded-4xl " + props.className}>
      {props.children}
    </button>
  )
}
