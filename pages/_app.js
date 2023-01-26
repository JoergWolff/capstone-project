import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { initialData } from "@/helpers/data/data";
import Top from "@/components/Top/Top";

export default function App({ Component, pageProps }) {
  const [books, setBooks] = useLocalStorageState("books", {
    defaultValue: [...initialData],
  });

  const bookCounter = books.length;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project Media DB</title>
      </Head>
      <Top bookcounter={bookCounter} />
      <Component {...pageProps} data={books} />
    </>
  );
}
