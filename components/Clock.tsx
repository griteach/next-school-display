import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { clockOptions } from "@/modules/lottieOptions";

export default function Clock() {
  const [cHour, setCHour] = useState(0);
  const [cMinute, setCMinute] = useState(0);
  const [cSecond, setCSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let time = new Date();
      setCHour(time.getHours() > 12 ? time.getHours() - 12 : time.getHours());
      setCMinute(time.getMinutes());
      setCSecond(time.getSeconds());
    }, 1000);
    console.log("clock mount!");

    return () => {
      clearInterval(timer);
      console.log("clock unmount!");
    };
  }, []);
  return (
    <div className="font-gwe_bold  w-full h-full bg-white  rounded-3xl shadow-xl p-3">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="relative flex justify-center  w-full h-full items-center ">
          <div className="flex justify-between w-full px-4">
            <div>
              <Lottie
                options={clockOptions}
                height={40}
                width={40}
                isClickToPauseDisabled={true}
              />
            </div>
            <div className="text-3xl">{`${cHour}시`}</div>
            <div className="text-3xl">{`${cMinute}분`}</div>
            <div className="text-3xl">{`${cSecond}초`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
