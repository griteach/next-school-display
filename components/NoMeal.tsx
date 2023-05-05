import { noMealOptions } from "@/modules/lottieOptions";
import Lottie from "react-lottie";

export default function NoMeal() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Lottie
            options={noMealOptions}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
          />
        </div>
        <h1 className="text-4xl mt-5">오늘은 급식이 없습니다</h1>
      </div>
    </div>
  );
}
