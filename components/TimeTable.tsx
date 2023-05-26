import { ForkKnife, Table, Watch } from "phosphor-react";
import { useEffect, useState } from "react";

export default function TimeTable() {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    const timeTable = (s_hour: number, s_min: number) => {
      if ((s_hour === 9 && s_min >= 10) || (s_hour === 9 && s_min <= 50)) {
        return "1교시";
      } else if (
        (s_hour === 9 && s_min >= 51) ||
        (s_hour === 10 && s_min <= 30)
      ) {
        return "2교시";
      } else if (
        (s_hour === 10 && s_min >= 31) ||
        (s_hour === 10 && s_min <= 50)
      ) {
        return "중간놀이";
      } else if (
        (s_hour === 10 && s_min >= 51) ||
        (s_hour === 11 && s_min <= 30)
      ) {
        return "3교시";
      } else if (
        (s_hour === 11 && s_min >= 31) ||
        (s_hour === 12 && s_min <= 10)
      ) {
        return "4교시";
      } else if (
        (s_hour === 12 && s_min >= 11) ||
        (s_hour === 13 && s_min <= 10)
      ) {
        return "점심시간";
      } else if (
        (s_hour === 13 && s_min >= 11) ||
        (s_hour === 13 && s_min <= 50)
      ) {
        return "5교시";
      } else if (
        (s_hour === 13 && s_min >= 51) ||
        (s_hour === 14 && s_min <= 30)
      ) {
        return "6교시";
      } else if (
        (s_hour === 14 && s_min >= 31) ||
        (s_hour === 15 && s_min <= 50)
      ) {
        return "방과후";
      } else if (
        (s_hour === 15 && s_min >= 51) ||
        (s_hour === 16 && s_min <= 10)
      ) {
        return "에듀버스 탑승";
      } else {
        return "하교 시간";
      }
    };
    const getActivity = () => {
      const time = new Date();
      const currentHour = time.getHours();
      const currentMinute = time.getMinutes();

      // 활동 내용을 현재 시간에 따라 설정합니다
      // 나중에는 이걸 가져오고 싶어요. DB에서 ㅋㅋ
      setActivity(timeTable(currentHour, currentMinute));
    };

    const interval = setInterval(() => {
      getActivity();
    }, 1000); // 1초마다 현재 시간을 확인합니다

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval을 정리합니다
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <Table size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">시정표</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center  ">
          <div className="flex justify-center items-center">
            <p className="mr-2 text-3xl">지금은 </p>
            <p className="mr-2 text-6xl">{activity}</p>
            <p className="mr-2 text-3xl"> 입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
