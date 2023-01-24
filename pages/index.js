import Card from "@/components/Card/Card";

export default function HomePage({ data }) {
  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <Card
            id={book.id}
            coverimage={book.coverImg}
            author={book.author}
            title={book.title}
            subtitle={book.subtitle}
          />
        </li>
      ))}
    </ul>
  );
}
