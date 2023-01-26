import GlobalStyle from "@/styles";
import Head from "next/head";
import { initialData } from "@/helpers/data/data";
import Top from "@/components/Top/Top";
import Bottom from "@/components/Bottom/Bottom";

export default function App({ Component, pageProps }) {
  const bookCounter = initialData.length;
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project Media DB</title>
      </Head>
      <Top bookcounter={bookCounter} />
      <Component {...pageProps} data={initialData} />
    </>
  );
}
