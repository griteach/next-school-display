import { GET_ANNIVERSARY_INFO, IAnniversaryGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { CalendarCheck, Table } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Anniversary() {
  //단기예보
  const {
    data: anniversaryData,
    loading: anniversaryLoading,
    refetch: anniversaryRefetch,
  } = useQuery<IAnniversaryGql>(GET_ANNIVERSARY_INFO);
  const [anniInfo, setAnniInfo] = useState("");
  useEffect(() => {
    const checkAnni = () => {
      const result = anniversaryData?.anniversaryInfo.find(function (item) {
        const todayFormatDash = dayjs().format("YYYYMMDD");
        const result = item;
        if (result != undefined && item.locdate === parseInt(todayFormatDash)) {
          return item;
        } else {
          return undefined;
        }
      });

      if (result != undefined) {
        setAnniInfo(result.dateName);
      } else {
        setAnniInfo("기념일이 없습니다.");
      }
    };
    checkAnni();
  }, [anniversaryData?.anniversaryInfo]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <CalendarCheck size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">기념일</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center  ">
          <p>{anniInfo}</p>
        </div>
      </div>
    </div>
  );
}
