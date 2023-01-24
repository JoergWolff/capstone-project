import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import dummyBook from "../../public/img/dummy/dummy_book.png";

export default function Card({ id, coverimage, author, title, subtitle }) {
  return (
    <StyledCard>
      {coverimage ? (
        <Image src={coverimage} width={70} height={100} alt={title} priority />
      ) : (
        <Image
          src={dummyBook}
          width={70}
          height={100}
          alt="No picture"
          priority
        />
      )}
      <StyledBookOverview>
        <h2>{author}</h2>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </StyledBookOverview>
      <Link href={`/detail/book/${id}`}>
        <Image
          src="/img/icons/edit.svg"
          height={30}
          width={30}
          alt="edit"
          className="image_icon_edit"
        />
      </Link>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  display: flex;
  margin: var(--main-margin);
  padding: var(--main-card-padding);
  background-color: var(--main-card-background-color);
  border: var(--main-card-border);
  border-radius: var(--main-card-border-radius);
`;

const StyledBookOverview = styled.div`
  padding: 0px 0px 0px 10px;
`;
