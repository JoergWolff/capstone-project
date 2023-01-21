import GlobalStyle from "@/styles";
import Head from "next/head";
import TopComponent from "@/components/topcomponent/TopComponent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <TopComponent />
      <Component {...pageProps} />
    </>
  );
}
