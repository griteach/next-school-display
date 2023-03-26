import {
  GET_MEDIUM_LAND,
  GET_MEDIUM_TEMP,
  IMediumLandGql,
  IMediumTempGql,
} from "@/modules/apollo";

import { useQuery } from "@apollo/client";

export default function MediumLand() {
  const dayjs = require("dayjs"); // dayjs 라이브러리를 사용하기 위해 require 합니다.
  const localizedFormat = require("dayjs/plugin/localizedFormat"); // 한국어 형식을 사용하기 위해 localizedFormat 플러그인을 불러옵니다.
  dayjs.extend(localizedFormat); // 플러그인을 사용합니다.

  // 한국어 로케일을 설정합니다.
  dayjs.locale("ko", {
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    weekdays: ["일", "월", "화", "수", "목", "금", "토"],
  });

  // 현재 날짜를 가져옵니다.
  const today = dayjs();

  const {
    data: mediumData,
    loading: mediumDataLoading,
    refetch: mediumDataRefetch,
  } = useQuery<IMediumLandGql>(GET_MEDIUM_LAND);

  const {
    data: mediumTempData,
    loading: mediumTempDataLoading,
    refetch: mediumTempDataRefetch,
  } = useQuery<IMediumTempGql>(GET_MEDIUM_TEMP);
  return (
    <div className="bg-teal-300 w-full h-full grid grid-cols-7 grid-rows-1">
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(1, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(2, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(3, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(4, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(5, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(6, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{`${today.add(7, "day").locale("ko").format("MM월 DD일")}`}</div>
      </div>

      {/* <div>{`3일 후 날씨 ${mediumData?.mediumLand.wf3Am}`}</div>
      <div>{`4일 후 날씨 ${mediumData?.mediumLand.wf4Am}`}</div>
      <div>{`5일 후 날씨 ${mediumData?.mediumLand.wf5Am}`}</div>

      
      <div>{`3일 후 최고 ${mediumTempData?.mediumTemp.taMax3}`}</div>
      <div>{`3일 후 최저 ${mediumTempData?.mediumTemp.taMin3}`}</div> */}
    </div>
  );
}
