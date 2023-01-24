import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card/Card";

export default function HomePage({ data }) {
  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <Card book={book}>
            <Link href={`/detail/book/${book.id}`}>
              <Image
                src="/img/icons/edit.svg"
                height={30}
                width={30}
                alt="edit"
                className="link_edit"
              />
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
