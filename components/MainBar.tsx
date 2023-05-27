import { workingOptions } from "@/modules/lottieOptions";
import Lottie from "react-lottie";
import Clock from "./Clock";
import Meal from "./Meal";
import MediumLand from "./MediumLand";
import TimeTable from "./TimeTable";
import Anniversary from "./Anniversary";
import CountriesInfo from "./Contries";

export default function MainBar() {
  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3 bg-blue-500   gap-3">
      <div className="rounded-2xl p-3 bg-white row-span-2">
        <Meal />
      </div>
      <div className="rounded-2xl p-3 bg-white">
        <CountriesInfo />
      </div>
      <div className="rounded-2xl p-3 bg-white">BirthDay</div>
      <div className="rounded-2xl p-3 bg-white">
        <TimeTable />
      </div>
      <div className="rounded-2xl p-3 bg-white">
        <Anniversary />
      </div>
      <div className="rounded-2xl bg-white p-3 col-span-2">
        <MediumLand />
      </div>

      <div className="rounded-2xl bg-white p-3 ">etc</div>
    </div>
  );
}
