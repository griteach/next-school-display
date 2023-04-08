import { GET_MEAL, IMeal, IMealGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { ForkKnife } from "phosphor-react";
import { SetStateAction, useEffect, useState } from "react";
import LunchMenu from "./LunchMenu";

export default function Meal() {
  const [todayLunch, setTodayLunch] = useState<IMeal | null>(null);
  const {
    data: mealData,
    loading: mealDataLoading,
    refetch: mealRefetch,
  } = useQuery<IMealGql>(GET_MEAL, {
    variables: {
      schoolCode: "7891019",
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
  console.log(typeof myLunch?.menu);
  useEffect(() => {
    setTodayLunch(myLunch!);
    const intercalId = setInterval(() => {
      mealRefetch();
    }, 1000 * 60 * 60 * 3);

    return () => {
      clearInterval(intercalId);
    };
  }, [mealRefetch, myLunch]);
  const hrStyle = {
    color: "red",
    backgroundColor: "red",
    height: 1,
    borderWidth: 0,
  };
  return (
    <div>
      <div className="flex justify-start items-center">
        <ForkKnife size={40} color="#938FF2" />
        <div className="text-3xl ml-2">오늘의 급식</div>
      </div>

      <div>
        <ul>
          {todayLunch?.menu.map((item) => (
            <li key={item}>
              <LunchMenu menu={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
