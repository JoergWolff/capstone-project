import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import useSWR from "swr";
import { v4 } from "uuid";
import { initialData } from "@/helpers/data/data";
import { fetcher } from "@/helpers/database/fetcher";
import Top from "@/components/Top/Top";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(v4());

  const [books, setBooks] = useLocalStorageState("books", {
    defaultValue: [...initialData],
  });

  const { data, error, isLoading } = useSWR("/api/books/", fetcher);

  if (data) {
    console.log(data);
    setBooks([...data]);
  }
  if (isLoading) {
    return <h1>Hello</h1>;
  }
  if (error) {
    console.log(error.message);
  }
  const bookCounter = books.length;

  function handleEditBook(currentBook) {
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
    router.push(`/books/details/${currentBook.id}/detail`);
  }

  function handleNewBook(currentBook) {
    const newBook = {
      ...currentBook,
      id: v4(),
      internalId: String(bookCounter + 1),
      isActive: true,
      isbn10: "",
      type: "book",
    };
    setBooks([newBook, ...books]);

    router.push(`/`);
  }

  function handleDeleteBook(currentBook) {
    setBooks(books.filter((book) => book.id !== currentBook.id));

    router.push("/");
  }

  function handleCancel() {
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project Media DB</title>
      </Head>
      <Top bookcounter={bookCounter} />
      <Component
        {...pageProps}
        data={books}
        onEditSubmit={handleEditBook}
        onNewSubmit={handleNewBook}
        onDelete={handleDeleteBook}
        onCancel={handleCancel}
      />
    </>
  );
}
