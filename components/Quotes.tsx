import { ChatCircleDots } from "phosphor-react";
import kadvice from "kadvice";
import { useEffect, useState } from "react";

interface IAdvice {
  author: string;
  authorProfile: string;
  message: string;
  tag: 1 | 2 | 3;
}

export default function Quotes() {
  const [dailyAdvice, setDailyAdvice] = useState<IAdvice>({
    author: "박상준",
    authorProfile: "서원초등학교 교사",
    message: "아직 잘 안돼? 연습하면 다~~ 돼!",
    tag: 1,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setDailyAdvice(kadvice.random());
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <ChatCircleDots size={40} color="#938FF2" />

          <div className=" text-3xl ml-2">명언</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center p-8 ">
          <div className="text-3xl">{dailyAdvice.message}</div>
          <div className="text-2xl mt-2 w-full flex justify-end italic">
            <p>{dailyAdvice.author}</p>
          </div>
          <div className="w-full text-xl flex justify-end italic">
            <p>{dailyAdvice.authorProfile}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
