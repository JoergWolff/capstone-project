import CardComponent from "@/components/cardcomponent/CardComponent";

export default function HomePage({ data }) {
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
