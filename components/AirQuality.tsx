import {
  GET_WEATHER,
  GET_WEATHER_GUESS,
  IWeatherGql,
  IWeatherGuessGql,
} from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import {
  Wind,
  CloudFog,
  Umbrella,
  DropHalf,
  ThermometerCold,
  ThermometerHot,
  Drop,
} from "phosphor-react";

import todayData from "@/modules/dayjs";

export default function AirQuality() {
  const { data: weatherGuessData, loading: weatherGuessLoading } =
    useQuery<IWeatherGuessGql>(GET_WEATHER_GUESS);

  //강수확률
  const pop = weatherGuessData?.allWeatherGuess.find(function (item) {
    if (
      item.category === "POP" &&
      item.fcstDate === todayData.day &&
      item.fcstTime === todayData.hour
    ) {
      return item;
    }
  });
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

  const { data: weatherData, loading: weatherDataLoading } =
    useQuery<IWeatherGql>(GET_WEATHER);
  const reh = weatherData?.allWeather.find(function (item) {
    if (item.category === "REH") {
      return item;
    }
  });
  const wsd = weatherData?.allWeather.find(function (item) {
    if (item.category === "WSD") {
      return item;
    }
  });
  const pty = weatherData?.allWeather.find(function (item) {
    if (item.category === "PTY") {
      return item;
    }
  });
  const rn1 = weatherData?.allWeather.find(function (item) {
    if (item.category === "RN1") {
      return item;
    }
  });
  return (
    <>
      <div className="bg-white w-full h-full rounded-3xl shadow-xl flex flex-col ">
        <div className="flex justify-start items-center pl-4 pt-4 ">
          <div>
            <CloudFog size={32} color="#938FF2" />
          </div>
          <div className="ml-2">오늘의 날씨</div>
        </div>
        <div className="w-full h-full  flex flex-col justify-center items-center p-4 ">
          <div className="w-full h-1/2  flex justify-evenly items-center">
            <div className="w-1/3 h-full  flex justify-center items-center">
              <div>
                <Drop size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start text-xs ml-1">
                <div>강수량</div>
                <div>{rn1?.obsrValue}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <Wind size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>바람세기</div>
                <div>{wsd?.obsrValue}m/s</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <ThermometerHot size={32} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>최고기온</div>
                <div>
                  {tmx?.fcstValue != undefined ? tmx?.fcstValue : "확인중"}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2  flex justify-evenly items-center">
            <div className="w-1/3 h-full  flex justify-center items-center">
              <div>
                <Umbrella size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start text-xs ml-1">
                <div>비올확률</div>
                <div>{`${pop?.fcstValue}%`}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <DropHalf size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>습도</div>
                <div>{reh?.obsrValue}%</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <ThermometerCold size={32} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>최저기온</div>
                <div>
                  {tmn?.fcstValue != undefined ? tmn?.fcstValue : "확인중"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
