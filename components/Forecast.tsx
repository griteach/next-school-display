import Lottie from "react-lottie";
import LottieWeatherPartlyShower from "../pages/lottie/weather/weather-partly-shower.json";

export default function Forecast() {
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
    <>
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
    </>
  );
}
