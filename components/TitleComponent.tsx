import todayData from "@/modules/dayjs";

export interface ITitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: ITitleComponentProps) {
  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-xl flex flex-col justify-center items-center ">
      <div>
        <h6 className="text-5xl font-gwe_bold bg-gradient-to-r from-mojito-r to-mojito-l bg-clip-text text-transparent ">
          {title}
        </h6>
      </div>
      <div>
        <p className="text-2xl mt-4">삶과 앎이 영그는 모두가 행복한 학교</p>
      </div>
      <div className="mt-2">
        <span className="text-2xl">{`${todayData.tYear}년 `}</span>
        <span className="text-2xl">{`${todayData.tMonth}월 `}</span>
        <span className="text-2xl">{`${todayData.tDate}일 `}</span>
        <span className="text-2xl">{`${todayData.tDay}`}</span>
      </div>
    </div>
  );
}
