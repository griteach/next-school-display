//미세먼지 기본 패쓰
export const DUST_PATH_BASIC =
  "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc";

//일기예보 기본 경로
export const FORCAST_WEATHER_PATH_BASIC =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

//측정소별 URL
export const STATION_DUST_URL = "/getCtprvnRltmMesureDnsty";

//미세먼지 예측 예보
export const FORCAST_DUST_URL = "/getMinuDustFrcstDspth";

export const weatherAPIData = {
  dustUrl: DUST_PATH_BASIC,
  weatherForcast: FORCAST_WEATHER_PATH_BASIC,
  stationUrl: STATION_DUST_URL,
  dustForcastUrl: FORCAST_DUST_URL,
};
