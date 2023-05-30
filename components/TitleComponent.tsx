import dayjs from "dayjs";

import { useEffect, useState } from "react";

export interface ITitleComponentProps {
  title: string;
}

interface ITodayText {
  tYear: number;
  tMonth: number;
  tDate: number;
  tDay: string | undefined;
}
export default function TitleComponent({ title }: ITitleComponentProps) {
  const [todayText, setTodayText] = useState<ITodayText>();

  const getKoreanDay = (day: number) => {
    switch (day) {
      case 0:
        return "일요일";
      case 1:
        return "월요일";
      case 2:
        return "화요일";
      case 3:
        return "수요일";
      case 4:
        return "목요일";
      case 5:
        return "금요일";
      case 6:
        return "토요일";
    }
  };

  useEffect(() => {
    function getToday() {
      const titleYear = dayjs().get("year");
      const titleMonth = dayjs().get("month");
      const titleDate = dayjs().get("date");
      const titleDay = getKoreanDay(dayjs().get("day"));

      return {
        tYear: titleYear,
        tMonth: titleMonth,
        tDate: titleDate,
        tDay: titleDay,
      };
    }

    setTodayText(getToday());
    const intercalId = setInterval(() => {
      setTodayText(getToday());
    }, 1000 * 60 * 60 * 3);

    return () => {
      clearInterval(intercalId);
    };
  }, []);
  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-2">
      <div>
        <h6 className="text-5xl font-gwe_bold bg-gradient-to-r from-mojito-r to-mojito-l bg-clip-text text-transparent ">
          {title}
        </h6>
      </div>
      <div>
        <p className="text-2xl mt-4">삶과 앎이 영그는 행복한 학교</p>
      </div>
      <div className="mt-2">
        <span className="text-2xl">{`${todayText?.tYear}년 `}</span>
        <span className="text-2xl">{`${todayText?.tMonth! + 1}월 `}</span>
        <span className="text-2xl">{`${todayText?.tDate}일 `}</span>
        <span className="text-2xl">{`${todayText?.tDay}`}</span>
      </div>
    </div>
  );
}
