import { workingOptions } from "@/modules/lottieOptions";
import Lottie from "react-lottie";

export default function MainBar() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div>
        <Lottie
          options={workingOptions}
          height={300}
          width={300}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className="font-gwe_bold text-6xl">테스트 중 입니다... 🚧</div>
      <div className="text-xl">made by griteach</div>
    </div>
  );
}
