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
  return (
    <>
      <div className="bg-white w-full h-full rounded-3xl shadow-xl flex flex-col ">
        <div className="flex justify-start items-center pl-4 pt-4 ">
          <div>
            <CloudFog size={32} color="#938FF2" />
          </div>
          <div>오늘 하늘은?</div>
        </div>
        <div className="w-full h-full  flex flex-col justify-center items-center p-3 ">
          <div className="w-full h-1/2  flex justify-evenly items-center">
            <div className="w-1/3 h-full  flex justify-center items-center">
              <div>
                <Thermometer size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start text-xs ml-1">
                <div>체감온도</div>
                <div>23.8</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <Wind size={28} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>풍속</div>
                <div>23.8</div>
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
                <div>자외선</div>
                <div>23.8</div>
              </div>
            </div>
            <div className="w-1/3 h-full  flex justify-center items-center text-xs">
              <div>
                <CloudFog size={32} color="#938FF2" />
              </div>
              <div className="w-2/3 h-full flex flex-col justify-center items-start ml-1">
                <div>오존</div>
                <div>23.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
