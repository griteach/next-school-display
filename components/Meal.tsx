import { GET_MEAL, IMeal, IMealGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { SetStateAction, useEffect, useState } from "react";

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
  console.log(myLunch?.menu);
  useEffect(() => {
    setTodayLunch(myLunch!);
    const intercalId = setInterval(() => {
      mealRefetch();
    }, 1000 * 60 * 60 * 3);

    return () => {
      clearInterval(intercalId);
    };
  }, [mealRefetch, myLunch]);
  return (
    <div>
      <div>급식 정보입니다.</div>
      <div>d</div>

      <div>{todayLunch?.date}</div>
      <div>{todayLunch?.menu}</div>
    </div>
  );
}
