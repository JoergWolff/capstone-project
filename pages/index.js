import Card from "@/components/Card/Card";

export default function HomePage({ data }) {
  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <Card book={book} />
        </li>
      ))}
    </ul>
  );
}
