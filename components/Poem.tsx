import { CalendarCheck } from "phosphor-react";

export default function Poem() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <CalendarCheck size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">이 달의 시</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center  ">
          <h1 className="text-2xl">{`너의 때가 온다`}</h1>

          <h3 className="text-lg self-end px-4">{`박노해`}</h3>

          <p className="text-md whitespace-pre-wrap">{`
          너는 작은 솔씨 하나지만
          네 안에는 아름드리 금강송이 들어있다
          
          너는 작은 도토리알이지만
          네 안에는 우람한 참나무가 들어있다
          
          너는 작은 보리 한 줄이지만
          네 안에는 푸른 보리밭이 숨 쉬고 있다
          
          너는 지금 작지만
          너는 이미 크다
          
          너는 지금 모르지만
          너의 때가 오고있다
          
          `}</p>
        </div>
      </div>
    </div>
  );
}
