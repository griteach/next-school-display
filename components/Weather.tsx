import { IGetDustResult } from "@/modules/typeDefinition";
import TitleComponent from "./TitleComponent";
import React from "react";
import Lottie from "react-lottie";

//로띠에 json 파일
import LottieData from "../pages/lottie/73864-smile-meter.json";

export default function WeatherComponent({ response }: IGetDustResult) {
  const dataArray = response.response.body.items.find(
    (item) => item.stationName === "지정면"
  );
  console.log(dataArray, "In weather component data ");

  const defaultOptions = {
    //예제1
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-tl-lg">
        <TitleComponent title="미세먼지" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Hello TTOWA!!</h1>
        <h2>1.Lottie Add(로티 추가하기)</h2>
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          isClickToPauseDisabled={true}
        />
        <h3>{dataArray?.stationName}</h3>
        <p>{dataArray?.pm10Value}</p>
        <p>{dataArray?.pm10Grade}</p>
        <p>{dataArray?.pm25Value}</p>
        <p>{dataArray?.pm25Grade}</p>
      </div>
    </div>
  );
}

//fake...
