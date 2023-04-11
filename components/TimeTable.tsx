import { ForkKnife, Table, Watch } from "phosphor-react";
import { useEffect, useState } from "react";

export default function TimeTable() {
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

    return () => {
      clearInterval(timer);
      console.log("clock unmount!");
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-teal-400">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <Table size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">시간표</div>
        </div>
      </div>
    </div>
  );
}
