import TitleComponent, { ITitleComponentProps } from "./TitleComponent";

import LottieWeatherPartlyShower from "../pages/lottie/weather/weather-partly-shower.json";

import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Smiley, Heart, Cloud, CloudFog } from "phosphor-react";

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

  return (
    <div className="bg-[#F0E4F2]  h-full w-full grid grid-cols-1  grid-rows-[1fr_3fr_3fr_2fr] rounded-2xl">
      <div className="rounded-tl-2xl rounded-tr-2xl">
        <TitleComponent title={title} />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-6">
        <div className="w-full h-full bg-gradient-to-r from-weather-l to-weather-r rounded-3xl flex shadow-xl">
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
              <span className="text-6xl">21</span>
              <span className="text-6xl">°</span>
              <div>
                <span className="text-[10px] text-white">체감온도 26°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col px-4 py-6">
        <div className="bg-white w-full h-full rounded-3xl shadow-xl flex flex-col">
          <div className="flex justify-start items-center">
            <div>
              <CloudFog size={32} color="#938FF2" />
            </div>
            <div>오늘 하늘은?</div>
          </div>
          <div className="w-full h-full bg-blue-400 grid grid-cols-3 grid-rows-2 justify-items-center items-center p-2 ">
            <div className="bg-red-300 ">1</div>
            <div className="bg-red-300 ">2</div>
            <div className="bg-red-300 ">3</div>
            <div className="bg-red-300 ">4</div>
            <div className="bg-red-300 ">5</div>
            <div className="bg-red-300 ">6</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col rounded-bl-2xl rounded-br-2xl"></div>
    </div>
  );
}
