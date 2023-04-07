import { GET_MEAL, IMeal, IMealGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { SetStateAction, useState } from "react";

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

  return (
    <div>
      <div>급식 정보입니다.</div>
      <div>d</div>
      <div>{mealData?.lunch.date}</div>
      <div>{mealData?.lunch.menu}</div>
    </div>
  );
}
