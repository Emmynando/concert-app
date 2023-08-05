import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/UI/Layout";
import ConcertContextProvider from "@components/store/concert-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConcertContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConcertContextProvider>
  );
}
