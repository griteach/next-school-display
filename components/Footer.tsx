import Link from "next/link";
import { GET_DUST, IDustGql } from "@/modules/apollo";
import { useQuery } from "@apollo/client";
import { todayData } from "../modules/dayjs";

export default function Footer() {
  const { data, loading } = useQuery<IDustGql>(GET_DUST, {
    variables: {
      stationName: "지정면",
    },
  });
  return (
    <>
      <div className="bg-teal-700 col-start-1 col-end-3 rounded-br-lg rounded-bl-lg">
        {loading
          ? "Loading..."
          : `${data?.dust.stationName}${data?.dust.khaiGrade}${data?.dust.pm25Value}${data?.dust.pm10Grade}`}
      </div>
    </>
  );
}
