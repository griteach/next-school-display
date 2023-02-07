import { IGetDustResult } from "@/modules/typeDefinition";
import WeatherComponent from "./Weather";
import Footer from "./Footer";
export default function MainInfo({ response }: IGetDustResult) {
  return (
    <>
      <div className="grid w-full h-full p-6 grid-cols-3 grid-rows-[3fr_3fr_1fr]  gap-3">
        {/* <div className="columns-2 hover:columns-3"> */}
        <div className="row-start-1 row-end-3">
          <WeatherComponent response={response} />
        </div>
        <div className="bg-blue-300 col-start-3 col-end-4 row-start-1 row-end-3">
          02
        </div>
        <div className="bg-slate-500">01</div>
        <div className="bg-orange-200">03</div>

        <Footer></Footer>
      </div>
    </>
  );
}
