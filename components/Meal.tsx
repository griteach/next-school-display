import { GET_MEAL, IMeal } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { SetStateAction } from "react";

export default function Meal() {
  const {
    data: mealData,
    loading: mealDataLoading,
    refetch: mealRefetch,
  } = useQuery<IMeal>(GET_MEAL, {
    variables: {
      schoolCode: "7891019",
      officeCode: "K10",
      //   onCompleted: (mealData: {
      //     getDustData: SetStateAction<IMeal | null>;
      //   }) => {
      //     // 여기서 refetching 했을 때 실시할 코드 넣기. 스테이트 관리
      //     // setDustState(dustData.getDustData);
      //   },
    },
  });
  if (mealDataLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>급식 정보입니다.</div>
    </div>
  );
}
