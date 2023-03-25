import { GET_MEDIUM_LAND, IMediumLandGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";

export default function MediumLand() {
  const {
    data: mediumData,
    loading: mediumDataLoading,
    refetch: mediumDataRefetch,
  } = useQuery<IMediumLandGql>(GET_MEDIUM_LAND);

  return (
    <div>
      <h1>WEEK WEATHER</h1>
      <div>{mediumData?.mediumLand.wf3Am}</div>
      <div>{mediumData?.mediumLand.wf4Am}</div>
      <div>{mediumData?.mediumLand.wf5Am}</div>
    </div>
  );
}
