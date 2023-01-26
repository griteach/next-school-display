import { ApolloClient, InMemoryCache } from "@apollo/client";

//아폴로의 캐쉬 저장공간을 만든다고 이해.
//uri는 역시 필요 없지 지금은.
//따로 엔드포인트(서버)를 하나 가지고 있는게 아니기 때문에!
//나중에 DB랑 연동할거면 프리즈마? 라는 걸로 연결하면 될듯

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
});

export default client;
