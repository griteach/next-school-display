export interface IDust {
  dataTime: string;
  khaiGrade: string; //통합대기환경수치 1좋음 2보통 3나쁨 4매우나쁨
  khaiValue: string;
  pm10Grade: string; //미세먼지 PM10 24시간 등급 자료
  pm10Grade1h: string; //미세먼지 PM10 1시간 등급 자료
  pm10Value: string;
  pm10Value24: string;
  pm25Grade: string;
  pm25Grade1h: string;
  pm25Value: string;
  pm25Value24: string;
  sidoName: string;
  o3Value: string;
  o3Grade: string;
  no2Value: string;
  no2Grade: string;
  coValue: string;
  coGrade: string;
  stationName: string;
}
export interface IGetDustResult {
  response: {
    response: {
      body: {
        items: IDust[];
      };
    };
  };
}
