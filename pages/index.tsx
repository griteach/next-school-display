import MainInfo from "@/components/MainInfo";
import { weatherData } from "@/modules/localState";
import { useReactiveVar } from "@apollo/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Seo from "./seo";

export default function Home({
  result,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="w-screen h-screen">
      {/* Seo component */}
      <Seo title="Seowon"></Seo>
      <MainInfo response={result} />
    </div>
  );
}

//getServerSideProps()는 page 파일에서만 부를 수 있다.
//Server SIde Rendering
//여기에 작성되는 코드는 서버에서 실행되는 것! 서버 사이드이기 때문!

export async function getServerSideProps() {
  //미세먼지 기본 패쓰
  const DUST_PATH_BASIC = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc";
  //측정소별 URL
  const DUST_URL = "/getCtprvnRltmMesureDnsty";
  const result = await (
    await fetch(
      `${DUST_PATH_BASIC}${DUST_URL}?serviceKey=${
        process.env.API_KEY
      }&numOfRows=100&returnType=json&ver=1.3&sidoName=${encodeURIComponent(
        "강원"
      )}`
    )
  ).json();
  console.log(result);
  console.log("getServerSideProps에서 실행완료");

  return {
    props: { result },
  };
}
