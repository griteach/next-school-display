import { GET_WEATHER, IWeatherGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import {
  Smiley,
  Wind,
  Cloud,
  CloudFog,
  Umbrella,
  Sunglasses,
  Thermometer,
} from "phosphor-react";

export default function AirQuality() {
  const { data: weatherData, loading: weatherDataLoading } =
    useQuery<IWeatherGql>(GET_WEATHER);
  const reh = weatherData?.allWeather.find(function (item) {
    if (item.category === "REH") {
      return item.obsrValue;
    }
  });
  const wsd = weatherData?.allWeather.find(function (item) {
    if (item.category === "WSD") {
      return item.obsrValue;
    }
  });
  const pty = weatherData?.allWeather.find(function (item) {
    if (item.category === "PTY") {
      return item.obsrValue;
    }
  });
  const rn1 = weatherData?.allWeather.find(function (item) {
    if (item.category === "RN1") {
      return item.obsrValue;
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
                <Thermometer size={28} color="#938FF2" />
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
                <div>풍속</div>
                <div>{wsd?.obsrValue}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <CloudFog size={32} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>이산화황</div>
                <div>23.8</div>
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
                <div>23.8</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <Sunglasses size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>습도</div>
                <div>{reh?.obsrValue}</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <CloudFog size={32} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>강수</div>
                <div>{pty?.obsrValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
