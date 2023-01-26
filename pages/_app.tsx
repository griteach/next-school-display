import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "@/pages/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/modules/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
