import TitleComponent, { ITitleComponentProps } from "./TitleComponent";

import LottieWeatherPartlyShower from "../pages/lottie/weather/weather-partly-shower.json";
import LottieBalloons from "../pages/lottie/etc/balloons-with-string.json";
import Lottie from "react-lottie";

export default function SideBar({ title }: ITitleComponentProps) {
  const weatherOptions = {
    //예제1
    loop: true,
    autoplay: true,
    animationData: LottieWeatherPartlyShower,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const balloonsOptions = {
    loot: true,
    autoplay: true,
    animationData: LottieBalloons,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-full w-full grid grid-cols-1 gap-1 grid-rows-[1fr_3fr_3fr_2fr] ">
      <div className="bg-[#F3E8F5] rounded-tl-2xl">
        <TitleComponent title={title} />
      </div>
      <div className="bg-[#F3E9F5] flex flex-col justify-evenly items-center px-4 py-12 ">
        <div className="w-full h-full bg-gradient-to-r from-weather-l to-weather-r rounded-3xl flex">
          <div className="w-1/2 h-full flex flex-col justify-center items-center p-4">
            <div className="">
              <Lottie
                options={weatherOptions}
                height={100}
                width={100}
                isClickToPauseDisabled={true}
              />
            </div>
            <div>
              <div className="text-xl text-white ">비가와요</div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center ">
            <div className="text-white">
              <span className="text-5xl">21</span>
              <span className="text-5xl">°</span>
              <div>
                <span className="text-[10px] text-white">체감온도 26°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3E8F5] flex flex-col justify-evenly items-start "></div>
      <div className="bg-[#F3E8F5] rounded-bl-2xl flex flex-col justify-evenly items-start"></div>
    </div>
  );
}
