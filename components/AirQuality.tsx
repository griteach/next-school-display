import {
  GET_DUST,
  GET_WEATHER,
  GET_WEATHER_GUESS,
  IDustGql,
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
import { useEffect } from "react";
import checkGrade from "@/modules/check";

export default function AirQuality() {
  const {
    data: dustData,
    loading: dustDataLoading,
    refetch: dustRefetch,
  } = useQuery<IDustGql>(GET_DUST, {
    variables: {
      stationName: "횡성읍",
    },
  });

  const {
    data: weatherGuessData,
    loading: weatherGuessLoading,
    refetch: weatherGuessRefetch,
  } = useQuery<IWeatherGuessGql>(GET_WEATHER_GUESS);

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

  const {
    data: weatherData,
    loading: weatherDataLoading,
    refetch: weatherDataRefetch,
  } = useQuery<IWeatherGql>(GET_WEATHER);
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
  const rn1 = weatherData?.allWeather.find(function (item) {
    if (item.category === "RN1") {
      return item;
    }
  });

  useEffect(() => {
    const intercalId = setInterval(() => {
      weatherDataRefetch();
      console.log("weather Data REFETCH!!!");
      weatherGuessRefetch();
      console.log("weather Guess data REFETCH!!!");
      dustRefetch();
      console.log("dust data refetch!");
    }, 1000 * 60 * 30);

    return () => {
      clearInterval(intercalId);
    };
  }, [weatherDataRefetch, weatherGuessRefetch, dustRefetch]);
  return (
    <>
      <div className="bg-white w-full h-full   rounded-3xl shadow-xl flex flex-col ">
        <div className="flex justify-start items-center pl-4 pt-4 ">
          <div>
            <CloudFog size={40} color="#938FF2" />
          </div>
          <div className="ml-2">
            <span className="text-2xl">오늘의 날씨</span>
          </div>
        </div>
        <div className="w-full h-full  flex flex-col justify-center items-center p-4 ">
          <div className="w-full h-1/2  flex justify-evenly items-center">
            <div className="w-1/3 h-full  flex justify-center items-center">
              <div>
                <Drop size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start text-lg ml-1">
                <div>일산화탄소</div>
                <div>{`${
                  dustDataLoading
                    ? "확인중"
                    : checkGrade(dustData?.dust.coGrade!)
                }`}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-lg ">
              <div>
                <Wind size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>바람세기</div>
                <div>{wsd?.obsrValue}m/s</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-lg">
              <div>
                <ThermometerHot size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>오존</div>
                <div>{`${checkGrade(dustData?.dust.o3Grade!)}`}</div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2  flex justify-evenly items-center">
            <div className="w-1/3 h-full  flex justify-center items-center">
              <div>
                <Umbrella size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start text-lg ml-1">
                <div>비올확률</div>
                <div>{`${pop?.fcstValue}%`}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-lg">
              <div>
                <DropHalf size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>습도</div>
                <div>{reh?.obsrValue}%</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-lg">
              <div>
                <ThermometerCold size={40} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>이산화질소</div>
                <div>{`${checkGrade(dustData?.dust.no2Grade!)}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
