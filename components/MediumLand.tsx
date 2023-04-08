import {
  GET_MEDIUM_LAND,
  GET_MEDIUM_TEMP,
  GET_WEATHER_GUESS,
  IMediumLandGql,
  IMediumTempGql,
  IWeatherGuess as IWeatherGuess,
  GET_MEAL,
  IMeal,
} from "@/modules/apollo";
import {
  etcLoadingOptions,
  mediumSunnyOptions,
  mediumWindyOptions,
  mediumRainOptions,
  mediumSnowOptions,
  mediumCloudyOptions,
} from "@/modules/lottieOptions";

import { Umbrella } from "phosphor-react";
import { useQuery } from "@apollo/client";
import Lottie from "react-lottie";
import { after } from "node:test";
import { SetStateAction, useEffect, useState } from "react";

export default function MediumLand() {
  const CLEAR_SKY_BG_COLOR =
    "bg-gradient-to-b from-weather-clear-t to-wather-clear-b";
  const RAIN_SKY_BG_COLOR =
    "bg-gradient-to-b from-weather-rain-t to-wather-rain-b";
  const [weatherBgColor, setWeatherBgColor] = useState(RAIN_SKY_BG_COLOR);
  const dayjs = require("dayjs"); // dayjs 라이브러리를 사용하기 위해 require 합니다.
  const localizedFormat = require("dayjs/plugin/localizedFormat"); // 한국어 형식을 사용하기 위해 localizedFormat 플러그인을 불러옵니다.
  dayjs.extend(localizedFormat); // 플러그인을 사용합니다.

  // 한국어 로케일을 설정합니다.
  dayjs.locale("ko", {
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    weekdays: ["일", "월", "화", "수", "목", "금", "토"],
  });

  // 현재 날짜를 가져옵니다.
  const today = dayjs();
  const tomorrow = today.add(1, "day").format("YYYYMMDD");
  const afterTomorrow = today.add(2, "day").format("YYYYMMDD");
  console.log(`오늘: ${today}, 내일: ${tomorrow}, 모레: ${afterTomorrow}`);

  //단기예보
  const {
    data: weatherGuessData,
    loading: weatherGuessLoading,
    refetch: weatherGuessRefetch,
  } = useQuery<IWeatherGuess>(GET_WEATHER_GUESS);

  //하늘상태
  const sky = weatherGuessData?.allWeatherGuess.filter(function (item) {
    return item.category === "SKY";
  });

  //강수확률
  const pop = weatherGuessData?.allWeatherGuess.filter(function (item) {
    return item.category === "POP";
  });

  //내일 최저기온
  const tomorrowTmn = weatherGuessData?.allWeatherGuess.filter(function (item) {
    return item.category === "TMN" && item.fcstDate === tomorrow;
  });

  //내일 최고기온
  const tomorrowTmx = weatherGuessData?.allWeatherGuess.filter(function (item) {
    return item.category === "TMX" && item.fcstDate === tomorrow;
  });

  //모레 최저기온
  const afterTomorrowTmn = weatherGuessData?.allWeatherGuess.filter(function (
    item
  ) {
    return item.category === "TMN" && item.fcstDate === afterTomorrow;
  });

  //모레 최고기온
  const afterTomorrowTmx = weatherGuessData?.allWeatherGuess.filter(function (
    item
  ) {
    return item.category === "TMX" && item.fcstDate === afterTomorrow;
  });

  const makeWeatherObj = () => {};

  console.log(
    "TMX",
    tomorrowTmx?.find(function (item) {
      return item;
    })?.fcstValue
  );
  console.log("TMn", tomorrowTmn);
  console.log("afterTMX", afterTomorrowTmx);
  console.log("afterTMn", afterTomorrowTmn);
  console.log(typeof afterTomorrowTmn);
  const getWeatherSky = (
    weatherGuess: IWeatherGuess,
    category: String,
    date: String,
    time: String
  ) => {
    weatherGuess?.allWeatherGuess
      .filter(function (item) {
        return item.category === category;
      })
      .find(function (item) {
        return item.fcstDate === date && item.fcstTime === time;
      });
  };

  //내일 하늘 상태
  const testTomorrowWeatherSky = getWeatherSky(
    weatherGuessData!,
    "SKY",
    tomorrow,
    "1100"
  );
  const tomorrowWeatherSky = weatherGuessData?.allWeatherGuess
    .filter(function (item) {
      return item.category === "SKY";
    })
    .find(function (item) {
      return item.fcstDate === tomorrow && item.fcstTime === "1100";
    });

  //내일 강수확률
  const tomorrowWeatherPop = pop?.find(function (item) {
    return item.fcstDate === tomorrow && item.fcstTime === "1100";
  });

  //모레 하늘 상태
  const afterTomorrowWeatherSky = sky?.find(function (item) {
    return item.fcstDate === afterTomorrow && item.fcstTime === "1100";
  });

  //모레 강수확률
  const afterTomorrowWeatherPop = pop?.find(function (item) {
    return item.fcstDate === afterTomorrow && item.fcstTime === "1100";
  });

  console.log(
    `내일 하늘상태: ${tomorrowWeatherSky?.fcstValue}, 내일 강수확률: ${tomorrowWeatherPop?.fcstValue}, 모레 하늘상태: ${afterTomorrowWeatherSky?.fcstValue}, 모레 강수확률: ${afterTomorrowWeatherPop?.fcstValue}`
  );

  const makeMediumLottieOptions = (value: string) => {
    switch (value) {
      case "맑음":
      case "1":
        return mediumSunnyOptions;
      case "구름많음":
      case "3":
        return mediumWindyOptions;

      case "구름많고비":
      case "구름많고 비":
      case "구름많고 소나기":
      case "구름많고소나기":
        return mediumRainOptions;
      case "흐림":
        return mediumCloudyOptions;
      case "흐리고 비":
      case "흐리고비":
      case "흐리고 소나기":
      case "흐리고소나기":
        return mediumRainOptions;
      case "흐리고눈":
      case "흐리고 눈":
      case "흐리고 비/눈":
      case "흐리고비/눈":
      case "구름많고 비/눈":
      case "구름많고비/눈":
        return mediumSnowOptions;
      default:
        return mediumWindyOptions;
    }
  };

  //중기예보 날씨 맑음, 흐림, 비 등
  const {
    data: mediumData,
    loading: mediumDataLoading,
    refetch: mediumDataRefetch,
  } = useQuery<IMediumLandGql>(GET_MEDIUM_LAND);

  //중기예보 기온, 강수량
  const {
    data: mediumTempData,
    loading: mediumTempDataLoading,
    refetch: mediumTempDataRefetch,
  } = useQuery<IMediumTempGql>(GET_MEDIUM_TEMP);
  useEffect(() => {
    const intercalId = setInterval(() => {
      mediumDataRefetch();
      mediumTempDataRefetch();
      weatherGuessRefetch();
    }, 1000 * 60 * 30);

    return () => {
      clearInterval(intercalId);
    };
  }, [mediumDataRefetch, mediumTempDataRefetch, weatherGuessRefetch]);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full  grid grid-cols-7 grid-rows-1 gap-1">
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">내일</div>
          <div className="text-white">{`${today
            .add(1, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {weatherGuessLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(
                  tomorrowWeatherSky?.fcstValue!
                )}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base  ">{`${
            weatherGuessLoading
              ? "Loading..."
              : parseInt(
                  tomorrowTmx?.find(function (item) {
                    return item;
                  })?.fcstValue!
                )
          }° / ${
            weatherGuessLoading
              ? "Loading..."
              : parseInt(
                  tomorrowTmn?.find(function (item) {
                    return item;
                  })?.fcstValue!
                )
          }°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${tomorrowWeatherPop?.fcstValue}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">모레</div>
          <div className="text-white">{`${today
            .add(2, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {weatherGuessLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(
                  afterTomorrowWeatherSky?.fcstValue!
                )}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${parseInt(
            weatherGuessLoading
              ? "Loading..."
              : afterTomorrowTmx?.find(function (item) {
                  return item;
                })?.fcstValue!
          )}° / ${parseInt(
            weatherGuessLoading
              ? "Loading..."
              : tomorrowTmn?.find(function (item) {
                  return item;
                })?.fcstValue!
          )}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${afterTomorrowWeatherPop?.fcstValue}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">{`${today
            .add(3, "day")
            .locale("ko")
            .format("dd")}`}</div>
          <div className="text-white">{`${today
            .add(3, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {mediumDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(mediumData?.mediumLand.wf3Pm!)}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${mediumTempData?.mediumTemp.taMax3}° / ${mediumTempData?.mediumTemp.taMin3}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${mediumData?.mediumLand.rnSt3Pm}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">{`${today
            .add(4, "day")
            .locale("ko")
            .format("dd")}`}</div>
          <div className="text-white">{`${today
            .add(4, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {mediumDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(mediumData?.mediumLand.wf4Pm!)}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${mediumTempData?.mediumTemp.taMax4}° / ${mediumTempData?.mediumTemp.taMin4}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${mediumData?.mediumLand.rnSt4Pm}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">{`${today
            .add(5, "day")
            .locale("ko")
            .format("dd")}`}</div>
          <div className="text-white">{`${today
            .add(5, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {mediumDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(mediumData?.mediumLand.wf5Pm!)}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${mediumTempData?.mediumTemp.taMax5}° / ${mediumTempData?.mediumTemp.taMin5}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${mediumData?.mediumLand.rnSt5Pm}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">{`${today
            .add(6, "day")
            .locale("ko")
            .format("dd")}`}</div>
          <div className="text-white">{`${today
            .add(6, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {mediumDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(mediumData?.mediumLand.wf6Pm!)}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${mediumTempData?.mediumTemp.taMax6}° / ${mediumTempData?.mediumTemp.taMin6}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${mediumData?.mediumLand.rnSt6Pm}%`}</div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-full ${CLEAR_SKY_BG_COLOR}`}
        >
          <div className="text-3xl text-white">{`${today
            .add(7, "day")
            .locale("ko")
            .format("dd")}`}</div>
          <div className="text-white">{`${today
            .add(7, "day")
            .locale("ko")
            .format("MM/DD")}`}</div>
          <div>
            {mediumDataLoading ? (
              <Lottie
                options={etcLoadingOptions}
                height={30}
                width={30}
                isClickToPauseDisabled={true}
              />
            ) : (
              <Lottie
                options={makeMediumLottieOptions(mediumData?.mediumLand.wf7Pm!)}
                height={70}
                width={70}
                isClickToPauseDisabled={true}
              />
            )}
          </div>
          <div className="text-base">{`${mediumTempData?.mediumTemp.taMax7}° / ${mediumTempData?.mediumTemp.taMin7}°`}</div>
          <div className="flex justify-center items-center">
            <div>
              <Umbrella size={30} color="#938FF2" />
            </div>
            <div className="ml-1">{`${mediumData?.mediumLand.rnSt7Pm}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
