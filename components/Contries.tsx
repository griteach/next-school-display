import { useEffect, useState } from "react";
import countriesData from "../public/csvjson.json";
import { Flag } from "phosphor-react";
import Image from "next/image";

interface ICountryInfo {
  name: string;
  englishName: string;
  iso: string;
  capital: string;
}

export default function CountriesInfo() {
  const [countryIndex, setCountryIndex] = useState(0);
  const [countryInfo, setCountryInfo] = useState<ICountryInfo>({
    name: "대한민국",
    englishName: "Korea",
    iso: "KO",
    capital: "서울",
  });
  const [flagImagePath, setFlagImagePath] = useState("");

  useEffect(() => {
    // 10초마다 다른 나라 정보로 업데이트
    const interval = setInterval(() => {
      setCountryIndex((prevIndex) => (prevIndex + 1) % countriesData.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const currentCountry = countriesData[countryIndex];
    // 나라 인덱스가 변경되면 해당 나라의 정보 설정
    setCountryInfo(currentCountry);

    //국기 이미지 가져오기
    const flagImagePath = `/flags/${currentCountry.iso}.gif`;
    setFlagImagePath(flagImagePath);
  }, [countryIndex]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="flex ">
          <Flag size={40} color="#938FF2" />
          <div className=" text-3xl ml-2">도전 암기왕</div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div>
            {flagImagePath && (
              <Image src={flagImagePath} alt="국기" width={200} height={150} />
            )}
          </div>
          <div className="mt-4">
            {countryInfo && (
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl">{countryInfo.name}</h2>
                <p className="text-2xl">수도: {countryInfo.capital}</p>

                {/* 다른 나라 정보를 추가적으로 표시할 수 있음 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
