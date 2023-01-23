import Card from "@/components/Card/Card";
import { initialData } from "@/helpers/data/data";

export default function HomePage() {
  const data = initialData;
  return (
    <>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <Card
              coverimage={book.coverImg}
              author={book.author}
              title={book.title}
              subtitle={book.subtitle}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
