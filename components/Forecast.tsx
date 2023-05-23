import {
  GET_DUST,
  GET_WEATHER,
  GET_WEATHER_GUESS,
  IDustGql,
  IWeatherGql,
  IWeatherGuess,
  Weather,
} from "@/modules/apollo";

import {
  dustCryingOptions,
  dustSmileOptions,
  dustConfusedOptions,
  dustAwesomeOptions,
  etcLoadingOptions,
} from "@/modules/lottieOptions";
import { IDust } from "@/modules/typeDefinition";
import { useQuery } from "@apollo/client";
import { ThermometerSimple } from "phosphor-react";
import { SetStateAction, useEffect, useState } from "react";
import Lottie from "react-lottie";

export default function Forecast() {
  const GOOD_SKY_BG_COLOR = "bg-gradient-to-r from-weather-l to-weather-r";
  const BAD_SKY_BG_COLOR = "bg-gradient-to-r from-dust-l to-dust-r";

  //배경색 관리 state
  const [bgColor, setBgColor] = useState(GOOD_SKY_BG_COLOR);

  //미세먼지 안내 메세지 (나가도 좋아요, 등)
  const [currentMsg, setCurrentMsg] = useState("");

  //현재 grade 농도 값
  const [currentPm10Grade, setCurrentPm10Grade] = useState("");
  const [currentPm25Grade, setCurrentPm25Grade] = useState("");

  //횡성읍으로 보내기.
  //여기를 각 학교별 가까운 스테이션으로 바꿔줘야함.
  const {
    data: dustData,
    loading: dustDataLoading,
    refetch: dustRefetch,
  } = useQuery<IDustGql>(GET_DUST, {
    variables: {
      stationName: "횡성읍",
      onCompleted: (dustData: {
        getDustData: SetStateAction<IDust | null>;
      }) => {
        setDustState(dustData.getDustData);
      },
    },
  });

  const [dustState, setDustState] = useState<IDust | null>(null);

  const [weatherState, setWeatherState] = useState({});
  //useQuery로 날씨 데이터 가져옴.
  //RN1(1시간강수량), T1H(기온), UUU(동서바람성분), VVV(남북바람성분), WSD(풍속)
  const {
    data: weatherData,
    loading: weatherDataLoading,
    refetch: weatherDataRefetch,
  } = useQuery<IWeatherGql>(GET_WEATHER, {
    onCompleted: (weatherData) => {
      setWeatherState((prevState) => {
        return {
          ...prevState,
          t1h: weatherData.allWeather.find(function (item) {
            if (item.category === "T1H") {
              return item.obsrValue;
            }
          }),
        };
      });
    },
  });
  //가지고는 왔는데 무슨 타입인지 체크가 필요함..
  //여기 고쳐보자고...

  //현재기온
  const t1h = weatherData?.allWeather.find(function (item) {
    if (item.category === "T1H") {
      return item.obsrValue;
    }
  });
  const {
    data: weatherGuessData,
    loading: weatherGuessLoading,
    refetch: weatherGuessRefetch,
  } = useQuery<IWeatherGuess>(GET_WEATHER_GUESS);

  const tmn = weatherGuessData?.allWeatherGuess.find(function (item) {
    if (item.category === "TMN") {
      return item.fcstValue;
    }
  });
  const tmx = weatherGuessData?.allWeatherGuess.find(function (item) {
    if (item.category === "TMX") {
      return item.fcstValue;
    }
  });

  //메세지 체크하기 : 좋아요. 안돼요 등
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkMsg = () => {
    const pm10Result = parseInt(dustData?.dust.pm10Grade!);
    const pm25Result = parseInt(dustData?.dust.pm25Grade!);
    if (pm10Result > 2 || pm25Result > 2) {
      setCurrentMsg("야외활동 자제!");
    } else if (pm10Result > 1 || pm25Result > 1) {
      setCurrentMsg("나가도 좋아요!");
    } else if (pm10Result == 1 && pm25Result == 1) {
      setCurrentMsg("깨끗한 하늘!");
    } else {
      setCurrentMsg("확인필요");
    }
    console.log("현 미세먼지 상태: ", currentMsg);
  };

  //pm 수치를 사용하여 lottie 선택하기(옵션값 변경하여)
  const makeLottieOptions = () => {
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

  //좋음, 보통, 나쁨, 매우나쁨 등
  const checkGrade = (grade: string) => {
    switch (grade) {
      case "1":
        return "좋음";
      case "2":
        return "보통";
      case "3":
        return "나쁨";
      case "4":
        return "매우나쁨";
      default:
        return "확인필요";
    }
  };

  //현재 값 저장하기 (useState)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkCurrentGrade = () => {
    setCurrentPm10Grade(dustData?.dust.pm10Grade!);
    setCurrentPm25Grade(dustData?.dust.pm25Grade!);
    console.log("Current pm10 : ", currentPm10Grade);
    console.log("Current pm25 : ", currentPm25Grade);
    console.log("Current pm 10 & 25 grade setting complete!");
  };

  //pm 값에 따라 배경 색상 변경하기
  const changeBackgroudColor = (pm10Grade: string, pm25Grade: string) => {
    const pm10 = parseInt(pm10Grade);
    const pm25 = parseInt(pm25Grade);

    if (pm10 <= 2 && pm25 <= 2) {
      console.log(pm10Grade);
      console.log(pm25Grade);
      setBgColor(GOOD_SKY_BG_COLOR);
      console.log("setBgColor GOOD!");
    } else {
      console.log(pm10Grade);
      console.log(pm25Grade);
      setBgColor(BAD_SKY_BG_COLOR);
      console.log("setBgColor BAD!");
    }
  };

  //1시간 주기로 데이터 갱신시키기
  useEffect(() => {
    checkMsg();
    checkCurrentGrade();
    changeBackgroudColor(currentPm10Grade, currentPm25Grade);
    const intercalId = setInterval(() => {
      dustRefetch();
      console.log("REFETCH!!!");
      weatherGuessRefetch();
      weatherDataRefetch();
      checkMsg();
      checkCurrentGrade();
      changeBackgroudColor(currentPm10Grade, currentPm25Grade);
    }, 1000 * 60 * 30);

    return () => {
      clearInterval(intercalId);
    };
  }, [
    dustRefetch,
    checkMsg,
    currentMsg,
    checkCurrentGrade,
    currentPm10Grade,
    currentPm25Grade,
    weatherGuessRefetch,
    weatherDataRefetch,
  ]);

  return (
    <>
      <div
        className={`w-full h-full ${bgColor} rounded-3xl grid grid-cols-2 grid-rows-[2fr_1fr] shadow-xl`}
      >
        <div className="flex flex-col justify-center items-center px-4">
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
                options={makeLottieOptions()!}
                height={120}
                width={120}
                isClickToPauseDisabled={true}
              />
            )}
          </div>

          <div>
            <div className="text-3xl text-white ">
              {/* 여기에 메세지 입력 */}
              <span>{currentMsg}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-white flex">
            <div className="flex justify-center items-center">
              <ThermometerSimple size={40} />
            </div>

            <span className="text-7xl ">{t1h?.obsrValue}</span>

            <span className="text-5xl">°</span>
          </div>
          <div className="text-white text-2xl flex justify-center items-center  ">{`${
            tmx?.fcstValue != undefined ? parseInt(tmx?.fcstValue) : "확인중"
          }°/ ${
            tmn?.fcstValue != undefined ? parseInt(tmn?.fcstValue) : "확인중"
          }°`}</div>
        </div>
        <div className="flex flex-col justify-center items-start col-span-2 px-10 text-white">
          <div className="w-full grid grid-cols-3 gird-rows-1 justify-items-start items-center">
            <div className="text-2xl">미세먼지</div>
            <div className="text-3xl justify-self-end">
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
            <div className="text-2xl justify-self-end">
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
            <div className="w-full text-2xl ">초미세먼지</div>
            <div className=" justify-self-end text-3xl  ">
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
            <div className="text-2xl justify-self-end">
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
          <div className="w-full flex justify-end pb-2 pt-1 text-base ">{`업데이트: ${dustData?.dust.dataTime}시`}</div>
        </div>
      </div>
    </>
  );
}
