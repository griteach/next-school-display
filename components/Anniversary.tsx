import { GET_ANNIVERSARY_INFO, IAnniversaryGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { CalendarCheck, Table } from "phosphor-react";
import { useEffect, useState } from "react";

interface IAnniInfo {
  anniInfo: string | undefined;
}

export default function Anniversary() {
  //단기예보
  const {
    data: anniversaryData,
    loading: anniversaryLoading,
    refetch: anniversaryRefetch,
  } = useQuery<IAnniversaryGql>(GET_ANNIVERSARY_INFO);
  const [anniInfo, setAnniInfo] = useState("");
  // useEffect(() => {
  //   const checkAnni = () => {
  //     const result = anniversaryData?.anniversaryInfo;
  //     const todayFormatDash = dayjs().format("YYYYMMDD");
  //     console.log("기념일 결과값:", result);
  //     console.log("오늘날짜: ", todayFormatDash);
  //     console.log("걍 찾아");
  //     if (result) {
  //       const todayEvent = result.find(
  //         (item) => item.locdate === parseInt(todayFormatDash)
  //       );
  //       if (todayEvent) {
  //         setAnniInfo(todayEvent.dateName);
  //       } else {
  //         setAnniInfo("오늘은 기념일이 없습니다.");
  //       }
  //     } else {
  //       setAnniInfo("기념일 정보를 불러올 수 없습니다.");
  //     }
  //   };
  //   checkAnni();
  // }, [anniversaryData?.anniversaryInfo]);
  useEffect(() => {
    const checkAnni = () => {
      const result = anniversaryData?.anniversaryInfo;
      const todayFormatDash = dayjs().format("YYYYMMDD");
      console.log("기념일 결과값:", result);
      if (result) {
        const todayEvent = result.find(
          (item) => item.locdate === parseInt(todayFormatDash)
        );
        if (todayEvent) {
          setAnniInfo(todayEvent.dateName);
        } else {
          setAnniInfo("오늘은 기념일이 없습니다.");
        }
      } else {
        setAnniInfo("기념일 정보를 불러올 수 없습니다.");
      }
    };

    // 처음 컴포넌트가 마운트 될 때 한 번 실행
    checkAnni();

    // 매일 두 번, 즉 12시간마다 갱신 (1000ms * 60 * 60 * 12)
    const intervalId = setInterval(() => {
      checkAnni();
      anniversaryRefetch(); // 여기서 GraphQL 쿼리를 다시 불러오게 함
    }, 1000 * 60 * 60 * 12);

    // 컴포넌트가 언마운트 될 때 setInterval을 정리
    return () => clearInterval(intervalId);
  }, [anniversaryData?.anniversaryInfo, anniversaryRefetch]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <CalendarCheck size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">기념일</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center  ">
          <div className="text-4xl">{anniInfo}</div>
        </div>
      </div>
    </div>
  );
}
