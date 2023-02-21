import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

//아폴로의 캐쉬 저장공간을 만든다고 이해.
//uri는 역시 필요 없지 지금은.
//따로 엔드포인트(서버)를 하나 가지고 있는게 아니기 때문에!
//나중에 DB랑 연동할거면 프리즈마? 라는 걸로 연결하면 될듯

export interface IWeatherGql {
  weather: {
    id: string;
    baseData: string;
    baseTime: string;
    category: string;
    nx: number;
    ny: number;
    obsrValue: string;
  };
}
export interface IDustGql {
  dust: {
    id: string;
    stationName: string;
    dataTime: string;
    pm10Grade: string;
    pm10Grade1h: string;
    pm10Value: string;
    pm10Value24: string;
    pm25Grade1h: string;
    pm25Value: string;
    pm25Value24: string;
    pm25Grade: string;
    khaiGrade: string;
    khaiValue: string;
    sidoName: string;
  };
}

export const GET_DUST = gql`
  query dust($stationName: String!) {
    dust(stationName: $stationName) {
      id
      stationName
      dataTime
      pm10Grade
      pm10Grade1h
      pm10Value
      pm10Value24
      pm25Grade1h
      pm25Value
      pm25Value24
      pm25Grade
      khaiGrade
      khaiValue
      sidoName
    }
  }
`;
export const GET_WEATHER = gql`
  query {
    allWeather {
      category
      baseDate
      baseTime
      id
      obsrValue
    }
  }
`;

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://iteach12.iptime.org:51212/",
  cache,
});

export default client;
