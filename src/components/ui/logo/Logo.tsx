export default function Logo({size}: { size?: number }) {
  return (
    <div>
      <img width={size ?? 50} height={size ?? 50} src={"/images/main/logo.svg"} alt="Logo"/>
    </div>
  )
}
