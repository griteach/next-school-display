import { GET_DUST, GET_WEATHER, IDustGql, IWeatherGql } from "@/modules/apollo";
import {
  dustCryingOptions,
  dustSmileOptions,
  dustConfusedOptions,
  dustAwesomeOptions,
  etcLoadingOptions,
} from "@/modules/lottieOptions";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

export default function Forecast() {
  const [currentGrade, setCurrentGrade] = useState("");
  const { data: dustData, loading: dustDataLoading } = useQuery<IDustGql>(
    GET_DUST,
    {
      variables: {
        stationName: "횡성읍",
      },
    }
  );
  const { data: weatherData, loading: weatherDataLoading } =
    useQuery<IWeatherGql>(GET_WEATHER);
  //가지고는 왔는데 무슨 타입인지 체크가 필요함..

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkMsg = () => {
    const pm10Result = parseInt(dustData?.dust.pm10Grade!);
    const pm25Result = parseInt(dustData?.dust.pm25Grade!);
    if (pm10Result > 2 || pm25Result > 2) {
      setCurrentGrade("야외활동 금지!");
    } else if (pm10Result > 1 || pm25Result > 1) {
      setCurrentGrade("나가도 좋아요!");
    } else if (pm10Result == 1 && pm25Result == 1) {
      setCurrentGrade("깨끗한 하늘!");
    } else {
      setCurrentGrade("확인필요");
    }
  };

  useEffect(() => {
    checkMsg();
  }, [checkMsg, currentGrade]);

  const checkDust = () => {
    const pm10Result = parseInt(dustData?.dust.pm10Grade!);
    const pm25Result = parseInt(dustData?.dust.pm25Grade!);
    if (pm10Result > 2 || pm25Result > 2) {
      return dustCryingOptions;
    } else if (pm10Result > 1 || pm25Result > 1) {
      return dustSmileOptions;
    } else if (pm10Result == 1 && pm25Result == 1) {
      return dustAwesomeOptions;
    } else {
      return dustConfusedOptions;
    }
  };

  const checkGrade = (dustGrade: string) => {
    const result = dustGrade;
    switch (result) {
      case "1":
        return "좋음";
      case "2":
        return "보통";
      case "3":
        return "나쁨";
      case "4":
        return "매우나쁨";
    }
  };

  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-weather-l to-weather-r rounded-3xl grid grid-cols-2 grid-rows-[2fr_1fr] shadow-xl">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="">
            {dustDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={checkDust()!}
                height={90}
                width={90}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div>
            <div className="text-xl text-white ">
              {/* 여기에 메세지 입력 */}
              {currentGrade}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="text-white">
            <span className="text-6xl">21</span>
            <span className="text-6xl">°</span>
            <div className="flex justify-center items-center ">
              <span className="text-lg text-white">{/* 온도 입력 */}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start col-span-2 px-10 text-white">
          <div className="w-full grid grid-cols-3 gird-rows-1 justify-items-start items-center">
            <div className="">미세먼지</div>
            <div className="text-2xl justify-self-end">
              {dustDataLoading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                checkGrade(dustData?.dust.pm10Grade!)
              )}
            </div>
            <div className="justify-self-end">
              {dustDataLoading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                dustData?.dust.pm10Value
              )}
              ㎍/m³
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gird-rows-1 justify-items-start items-center">
            <div className="">초미세먼지</div>
            <div className="justify-self-end text-2xl">
              {dustDataLoading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                checkGrade(dustData?.dust.pm25Grade!)
              )}
            </div>
            <div className="justify-self-end">
              {dustDataLoading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                dustData?.dust.pm25Value
              )}
              ㎍/m³
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
