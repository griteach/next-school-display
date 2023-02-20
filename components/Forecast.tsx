import { GET_DUST, IDustGql } from "@/modules/apollo";
import {
  dustCryingOptions,
  dustSmileOptions,
  dustConfusedOptions,
  dustAwesomeOptions,
} from "@/modules/lottieOptions";
import { useQuery } from "@apollo/client";
import Lottie from "react-lottie";

export default function Forecast() {
  const { data, loading } = useQuery<IDustGql>(GET_DUST, {
    variables: {
      stationName: "지정면",
    },
  });

  const checkDust = () => {
    const result = parseInt(data?.dust.pm10Value!);
    if (result <= 30) {
      return dustAwesomeOptions;
    } else if (result <= 80) {
      return dustSmileOptions;
    } else if (result > 80) {
      return dustCryingOptions;
    }
  };
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-weather-l to-weather-r rounded-3xl flex shadow-xl">
        <div className="w-1/2 h-full flex flex-col justify-center items-center p-4">
          <div className="">
            <Lottie
              options={checkDust()!}
              height={100}
              width={100}
              isClickToPauseDisabled={true}
            />
          </div>
          <div>
            <div className="text-xl text-white ">
              {loading ? "Loading..." : `${data?.dust.pm10Value}`}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center ">
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
      </div>
    </>
  );
}
