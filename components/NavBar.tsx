import TitleComponent, { ITitleComponentProps } from "./TitleComponent";

export default function NavBar({ title }: ITitleComponentProps) {
  return (
    <div className="h-full w-full grid grid-cols-1 grid-rows-[1fr_2fr] gap-1">
      <div className="bg-white rounded-tl-2xl">
        <TitleComponent title={title} />
      </div>
      <div className="bg-white rounded-bl-2xl flex flex-col justify-evenly items-start pl-6"></div>
    </div>
  );
}
