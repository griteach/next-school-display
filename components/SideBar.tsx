import TitleComponent, { ITitleComponentProps } from "./TitleComponent";
import Forecast from "./Forecast";
import AirQuality from "./AirQuality";

export default function SideBar({ title }: ITitleComponentProps) {
  return (
    <div className="bg-[#F0E4F2]  h-full w-full grid grid-cols-1  grid-rows-[1fr_3fr_3fr_2fr] rounded-2xl">
      <div className="rounded-tl-2xl rounded-tr-2xl">
        <TitleComponent title={title} />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-6">
        <Forecast />
      </div>
      <div className=" flex flex-col px-4 py-6">
        <AirQuality />
      </div>
      <div className=" flex flex-col rounded-bl-2xl rounded-br-2xl"></div>
    </div>
  );
}
