import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { clockOptions } from "@/modules/lottieOptions";

export default function Clock() {
  const [clock, setClock] = useState("00시00분00초");

  useEffect(() => {
    const timer = setInterval(() => {
      let time = new Date();
      let myHour = time.getHours();
      const finalMyHour = myHour > 12 ? myHour - 12 : myHour;

      setClock(
        finalMyHour +
          "시 " +
          time.getMinutes() +
          "분 " +
          time.getSeconds() +
          "초"
      );
    }, 1000);
    console.log("mount!");

    return () => {
      clearInterval(timer);
      console.log("unmount!");
    };
  }, []);
  return (
    <div className="w-full h-full bg-white  rounded-3xl shadow-xl p-3">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="relative flex justify-center  w-full h-full items-center ">
          <div className="">
            <span className="text-4xl">{clock}</span>
          </div>
          <div className="absolute left-1">
            <Lottie
              options={clockOptions}
              height={40}
              width={40}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
