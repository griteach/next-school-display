import { GET_MEAL, IMeal, IMealGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { ForkKnife, Info } from "phosphor-react";
import { SetStateAction, useEffect, useState } from "react";
import LunchMenu from "./LunchMenu";
import NoMeal from "./NoMeal";

export default function Meal() {
  const [todayLunch, setTodayLunch] = useState<IMeal | null>(null);

  const {
    data: mealData,
    loading: mealDataLoading,
    refetch: mealRefetch,
  } = useQuery<IMealGql>(GET_MEAL, {
    variables: {
      schoolCode: "7892021",
      officeCode: "K10",
      onCompleted: (mealData: {
        getMealData: SetStateAction<IMeal | null>;
      }) => {
        // 여기서 refetching 했을 때 실시할 코드 넣기. 스테이트 관리
        setTodayLunch(mealData.getMealData);
      },
    },
  });

  const myLunch = mealData?.lunch;

  useEffect(() => {
    setTodayLunch(mealData?.lunch!);

    const intercalId = setInterval(() => {
      mealRefetch();
    }, 1000 * 60 * 60 * 3);

    return () => {
      clearInterval(intercalId);
    };
  }, [mealRefetch, myLunch, mealData]);

  if (myLunch === undefined) {
    console.log("오늘은 급식이 없습니다.");
    return (
      <>
        <NoMeal />
      </>
    );
  }
  return (
    <div className="w-full h-full flex flex-col justify-evenly">
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <ForkKnife size={40} color="#938FF2" />
          <div className="text-3xl ml-2">오늘의 점심식사</div>
        </div>
        <div className="mt-2 flex justify-center items-center rounded-3xl shadow-xl bg-gray-200">
          <div className="flex justify-center items-center">
            <ul className="flex flex-col justify-center items-center p-2">
              {todayLunch?.menu.map((item) => (
                <li key={item}>
                  <LunchMenu menu={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-start items-center mt-2">
          <Info size={40} color="#938FF2" />
          <div className="text-3xl ml-2">열량(칼로리)</div>
        </div>
        <div className="flex justify-center text-3xl rounded-3xl shadow-xl bg-gray-200 mt-2">{`${todayLunch?.cal}`}</div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center mt-3">
          <Info size={40} color="#938FF2" />
          <div className="text-3xl ml-2">영양소</div>
        </div>
        <div className="px-4 py-2 text-lg rounded-3xl shadow-xl bg-gray-200 mt-2">
          {/* <ul>
            {todayLunch?.ntr.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul> */}
          {todayLunch?.ntr.join(", ")}
        </div>
      </div>
    </div>
  );
}
