import GlobalStyle from "@/styles";
import Head from "next/head";
import Top from "@/components/Top/Top";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project Media DB</title>
      </Head>
      <Top />
      <Component {...pageProps} />
    </>
  );
}
