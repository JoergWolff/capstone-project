import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { initialData } from "@/helpers/data/data";
import Top from "@/components/Top/Top";

export default function App({ Component, pageProps }) {
  const [books, setBooks] = useLocalStorageState("books", {
    defaultValue: [...initialData],
  });
  const router = useRouter();

  const bookCounter = books.length;

  function editBook(currentBook) {
    setBooks(
      books.map((book) =>
        book.id === currentBook.id
          ? {
              ...book,
              author: currentBook.author,
              title: currentBook.title,
              subtitle: currentBook.subtitle,
              teaser: currentBook.teaser,
            }
          : book
      )
    );
    router.push(`/detail/book/${currentBook.id}/detail`);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project Media DB</title>
      </Head>
      <Top bookcounter={bookCounter} />
      <Component {...pageProps} data={books} onEditSubmit={editBook} />
    </>
  );
}
