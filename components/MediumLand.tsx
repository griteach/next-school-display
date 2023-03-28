import {
  GET_MEDIUM_LAND,
  GET_MEDIUM_TEMP,
  GET_WEATHER_GUESS,
  IMediumLandGql,
  IMediumTempGql,
  IWeatherGuessGql,
} from "@/modules/apollo";
import {
  etcLoadingOptions,
  mediumSunnyOptions,
  mediumWindyOptions,
  mediumRainOptions,
  mediumSnowOptions,
} from "@/modules/lottieOptions";

import { Umbrella } from "phosphor-react";
import { useQuery } from "@apollo/client";
import Lottie from "react-lottie";

export default function MediumLand() {
  const CLEAR_SKY_BG_COLOR =
    "bg-gradient-to-b from-weather-clear-t to-wather-clear-b";
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

  //단기예보
  const {
    data: weatherGuessData,
    loading: weatherGuessLoading,
    refetch: weatherGuessRefetch,
  } = useQuery<IWeatherGuessGql>(GET_WEATHER_GUESS);
  const sky = weatherGuessData?.allWeatherGuess.find(function (item) {
    if (item.category === "SKY") {
      return item.fcstValue;
    }
  });

  const makeMediumLottieOptions = (value: string) => {
    switch (value) {
      case "맑음":
        return mediumSunnyOptions;
      case "구름많음":
        return mediumWindyOptions;
      default:
        return mediumWindyOptions;
    }
  };
  const makeMedium_2_3_LottieOptions = (value: string) => {
    switch (value) {
      case "없음":
        return mediumSunnyOptions;
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
  return (
    <div className="w-full h-full">
      <div className="w-full h-full  grid grid-cols-7 grid-rows-1 gap-1">
        <div className="flex flex-col justify-center items-center">
          <div>내일</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>모레</div>
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
