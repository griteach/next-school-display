import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

//아폴로의 캐쉬 저장공간을 만든다고 이해.
//uri는 역시 필요 없지 지금은.
//따로 엔드포인트(서버)를 하나 가지고 있는게 아니기 때문에!
//나중에 DB랑 연동할거면 프리즈마? 라는 걸로 연결하면 될듯

export interface Weather {
  id: string;
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
  obsrValue: string;
}

export interface WeatherGuess {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export interface MediumLand {
  regId: String;

  //강수 예보
  rnSt3Am: number;
  rnSt3Pm: number;
  rnSt4Am: number;
  rnSt4Pm: number;
  rnSt5Am: number;
  rnSt5Pm: number;
  rnSt6Am: number;
  rnSt6Pm: number;
  rnSt7Am: number;
  rnSt7Pm: number;
  rnSt8: number;
  rnSt9: number;
  rnSt10: number;
  //wf 날씨예보, 맑음 흐림, 구름 등등
  wf3Am: string;
  wf3Pm: string;
  wf4Am: string;
  wf4Pm: string;
  wf5Am: string;
  wf5Pm: string;
  wf6Am: string;
  wf6Pm: string;
  wf7Am: string;
  wf7Pm: string;
  wf8: string;
  wf9: string;
  wf10: string;
}

export interface MediumTemp {
  regId: string;
  taMin3: number;
  taMin3Low: number;
  taMin3High: number;
  taMax3: number;
  taMax3Low: number;
  taMax3High: number;
  taMin4: number;
  taMin4Low: number;
  taMin4High: number;
  taMax4: number;
  taMax4Low: number;
  taMax4High: number;
  taMin5: number;
  taMin5Low: number;
  taMin5High: number;
  taMax5: number;
  taMax5Low: number;
  taMax5High: number;
  taMin6: number;
  taMin6Low: number;
  taMin6High: number;
  taMax6: number;
  taMax6Low: number;
  taMax6High: number;
  taMin7: number;
  taMin7Low: number;
  taMin7High: number;
  taMax7: number;
  taMax7Low: number;
  taMax7High: number;
  taMin8: number;
  taMin8Low: number;
  taMin8High: number;
  taMax8: number;
  taMax8Low: number;
  taMax8High: number;
  taMin9: number;
  taMin9Low: number;
  taMin9High: number;
  taMax9: number;
  taMax9Low: number;
  taMax9High: number;
  taMin10: number;
  taMin10Low: number;
  taMin10High: number;
  taMax10: number;
  taMax10Low: number;
  taMax10High: number;
}

export interface IMeal {
  date: string;
  menu: [string];
}
export interface IMealGql {
  lunch: IMeal;
}
export interface IWeatherGql {
  allWeather: Weather[];
}
export interface IMediumLandGql {
  mediumLand: MediumLand;
}

export interface IMediumTempGql {
  mediumTemp: MediumTemp;
}

export interface IWeatherGuess {
  allWeatherGuess: WeatherGuess[];
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
    o3Grade: string;
    o3Value: string;
    no2Value: string;
    no2Grade: string;
    coValue: string;
    coGrade: string;
    sidoName: string;
  };
}

//neis 급식
export const GET_MEAL = gql`
  query Query($schoolCode: String!, $officeCode: String!) {
    lunch(schoolCode: $schoolCode, officeCode: $officeCode) {
      menu
      date
    }
  }
`;

//지역으로 미세먼지 검색하기.
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
      o3Grade
      o3Value
      coGrade
      coValue
      no2Grade
      no2Value
      sidoName
    }
  }
`;

//초단기 실황값
//RN1, T1H, UUU, VVV, WSD
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

//단기예보
export const GET_WEATHER_GUESS = gql`
  query {
    allWeatherGuess {
      baseDate
      baseTime
      category
      fcstDate
      fcstTime
      fcstValue
      nx
      ny
    }
  }
`;

export const GET_MEDIUM_WEATHER_GUESS = gql`
  query {
    mediumWeatherGuess {
      baseDate
      baseTime
      category
      fcstDate
      fcstTime
      fcstValue
      nx
      ny
    }
  }
`;

export const GET_MEDIUM_LAND = gql`
  query {
    mediumLand {
      regId
      rnSt10
      rnSt3Pm
      rnSt3Am
      rnSt4Am
      rnSt4Pm
      rnSt5Am
      rnSt5Pm
      rnSt6Am
      rnSt6Pm
      rnSt7Am
      rnSt7Pm
      rnSt8
      rnSt9
      wf3Am
      wf3Pm
      wf4Am
      wf4Pm
      wf5Am
      wf5Pm
      wf6Am
      wf6Pm
      wf9
      wf7Am
      wf7Pm
      wf8
      wf10
    }
  }
`;
export const GET_MEDIUM_TEMP = gql`
  query {
    mediumTemp {
      regId
      taMin3
      taMin3Low
      taMin3High
      taMax3
      taMax3Low
      taMax3High
      taMin4
      taMin4Low
      taMin4High
      taMax4
      taMax4Low
      taMax4High
      taMin5
      taMin5Low
      taMin5High
      taMax5
      taMax5Low
      taMax5High
      taMin6
      taMin6Low
      taMin6High
      taMax6
      taMax6Low
      taMax6High
      taMin7
      taMin7Low
      taMin7High
      taMax7
      taMax7Low
      taMax7High
      taMin8
      taMin8Low
      taMin8High
      taMax8
      taMax8Low
      taMax8High
      taMin9
      taMin9Low
      taMin9High
      taMax9
      taMax9Low
      taMax9High
      taMin10
      taMin10Low
      taMin10High
      taMax10
      taMax10Low
      taMax10High
    }
  }
`;
const cache = new InMemoryCache();

const client = new ApolloClient({
  //Real Server
  // uri: "http://iteach12.iptime.org:51212/",

  //Dev Server
  uri: "http://localhost:5001/",
  cache,
});

export default client;
