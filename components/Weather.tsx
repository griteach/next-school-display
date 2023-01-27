import { IGetDustResult } from "@/modules/typeDefinition";
import TitleComponent from "./TitleComponent";

export default function WeatherComponent({ response }: IGetDustResult) {
  const dataArray = response.response.body.items.find(
    (item) => item.stationName === "지정면"
  );
  console.log(dataArray, "In weather component data ");
  return (
    <div>
      <div className="bg-white rounded-tl-lg">
        <TitleComponent title="미세먼지" />
      </div>
      <div>
        <h3>{dataArray?.stationName}</h3>
        <p>{dataArray?.pm10Value}</p>
        <p>{dataArray?.pm10Grade}</p>
        <p>{dataArray?.pm25Value}</p>
        <p>{dataArray?.pm25Grade}</p>
      </div>
    </div>
  );
}
