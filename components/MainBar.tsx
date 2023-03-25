import { workingOptions } from "@/modules/lottieOptions";
import Lottie from "react-lottie";
import MediumLand from "./MediumLand";

export default function MainBar() {
  return (
    <div className="grid w-full h-full p-2 grid-cols-3 grid-rows-4 bg-blue-500   gap-3">
      <div className=" bg-red-400 row-span-2">급식</div>
      <div className=" bg-yellow-400 col-span-2 row-span-2">
        <MediumLand />
      </div>
      <div className=" bg-green-400">D-day</div>
      <div className=" bg-teal-400">BirthDay</div>
      <div className=" bg-amber-400">Quiz</div>
      <div className=" bg-indigo-400">Holiday</div>
      <div className=" bg-green-400 col-span-2">7</div>
    </div>
  );
}
