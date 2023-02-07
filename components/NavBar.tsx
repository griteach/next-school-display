import TitleComponent, { ITitleComponentProps } from "./TitleComponent";

export default function NavBar({ title }: ITitleComponentProps) {
  return (
    <div className="h-full w-full grid grid-cols-1 grid-rows-[1fr_2fr] gap-1">
      <div className="bg-red-400 rounded-tl-2xl">
        <TitleComponent title={title} />
      </div>
      <div className="bg-yellow-500 rounded-bl-2xl">MENU list</div>
    </div>
  );
}
