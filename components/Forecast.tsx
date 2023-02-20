import { GET_DUST, IDustGql } from "@/modules/apollo";
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
import { setTimeout } from "timers";

export default function Forecast() {
  let currentGrade = "";
  const { data, loading } = useQuery<IDustGql>(GET_DUST, {
    variables: {
      stationName: "지정면",
    },
  });

  const [totalMsg, setTotalMsg] = useState("야외활동 안돼요!");
  useEffect(() => {
    setTimeout(() => {
      checkMsg();
      setTotalMsg(currentGrade);
    }, 2000);
  }, [currentGrade]);
  const checkMsg = () => {
    const pm10Result = parseInt(data?.dust.pm10Grade!);
    const pm25Result = parseInt(data?.dust.pm25Grade!);
    if (pm10Result > 2 || pm25Result > 2) {
      currentGrade = "야외활동 금지!";
      return;
    } else if (pm10Result > 1 || pm25Result > 1) {
      currentGrade = "나가도 좋아요!";
      return;
    } else if (pm10Result == 1 && pm25Result == 1) {
      currentGrade = "깨끗한 하늘!";
      return;
    } else {
      currentGrade = "확인필요";
      return;
    }
  };

  const checkDust = () => {
    const pm10Result = parseInt(data?.dust.pm10Grade!);
    const pm25Result = parseInt(data?.dust.pm25Grade!);
    if (pm10Result > 2 || pm25Result > 2) {
      currentGrade = "야외활동 금지!";
      return dustCryingOptions;
    } else if (pm10Result > 1 || pm25Result > 1) {
      currentGrade = "나가도 좋아요!";
      return dustSmileOptions;
    } else if (pm10Result == 1 && pm25Result == 1) {
      currentGrade = "깨끗한 하늘!";
      return dustAwesomeOptions;
    } else {
      currentGrade = "확인필요";
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

  const checkMessage = () => {};
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-weather-l to-weather-r rounded-3xl grid grid-cols-2 grid-rows-[2fr_1fr] shadow-xl">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="">
            {loading ? (
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
              {loading
                ? "Loading..."
                : `${totalMsg}, ${data?.dust.pm10Grade}, ${data?.dust.pm25Grade}`}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="text-white">
            <span className="text-6xl">21</span>
            <span className="text-6xl">°</span>
            <div>
              <span className="text-[10px] text-white">
                {`${data?.dust.pm10Value}`}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start col-span-2 px-10 text-white">
          <div className="w-full grid grid-cols-3 gird-rows-1 justify-items-start items-center">
            <div className="">미세먼지</div>
            <div className="text-2xl justify-self-end">
              {loading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                checkGrade(data?.dust.pm10Grade!)
              )}
            </div>
            <div className="justify-self-end">
              {loading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                data?.dust.pm10Value
              )}
              ㎍/m³
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gird-rows-1 justify-items-start items-center">
            <div className="">초미세먼지</div>
            <div className="justify-self-end text-2xl">
              {loading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                checkGrade(data?.dust.pm25Grade!)
              )}
            </div>
            <div className="justify-self-end">
              {loading ? (
                <Lottie
                  options={etcLoadingOptions}
                  height={30}
                  width={30}
                  isClickToPauseDisabled={true}
                />
              ) : (
                data?.dust.pm25Value
              )}
              ㎍/m³
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
