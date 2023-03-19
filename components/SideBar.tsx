import TitleComponent, { ITitleComponentProps } from "./TitleComponent";
import Forecast from "./Forecast";
import AirQuality from "./AirQuality";

import Clock from "./Clock";

export default function SideBar({ title }: ITitleComponentProps) {
  return (
    <div className="bg-[#F0E4F2]  h-full w-full grid grid-cols-1  grid-rows-[2fr_3fr_2fr_2fr] rounded-2xl">
      <div className="rounded-tl-2xl rounded-tr-2xl p-4">
        <TitleComponent title={title} />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <Forecast />
      </div>
      <div className=" flex flex-col px-4 py-3">
        <AirQuality />
      </div>
      <div className=" flex flex-col rounded-bl-2xl rounded-br-2xl p-4">
        <Clock />
      </div>
    </div>
  );
}
