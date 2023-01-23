import GlobalStyle from "@/styles";
import Head from "next/head";
import { initialData } from "@/helpers/data/data";
import TopComponent from "@/components/TopComponent/TopComponent";

export default function App({ Component, pageProps }) {
  const bookCounter = initialData.length;
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <TopComponent bookcounter={bookCounter} />
      <Component {...pageProps} />
    </>
  );
}
