import { IGetDustResult } from "@/modules/typeDefinition";
import WeatherComponent from "./Weather";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function MainInfo({ response }: IGetDustResult) {
  return (
    <>
      <div className="grid w-full h-full px-6 py-10 grid-cols-[1fr_4fr] grid-rows-1 gap-1 bg-slate-300">
        {/* <div className="columns-2 hover:columns-3"> */}
        <div className="rounded-bl-2xl rounded-tl-2xl ">
          <NavBar title={`서원초등학교`} />
          {/* <WeatherComponent response={response} /> */}
        </div>
        <div className="bg-white rounded-br-2xl rounded-tr-2xl"></div>
      </div>
    </>
  );
}
