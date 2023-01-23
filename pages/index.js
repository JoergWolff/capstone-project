import CardComponent from "@/components/cardcomponent/CardComponent";
import { initialData } from "@/helpers/data/data";

export default function HomePage() {
  const data = initialData;
  return (
    <>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <CardComponent
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
