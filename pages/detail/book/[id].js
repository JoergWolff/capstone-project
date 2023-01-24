import { useRouter } from "next/router";

export default function DetailBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id == id);

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }
  return <h1>{currentBook.title}</h1>;
}
