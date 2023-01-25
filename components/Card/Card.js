import Image from "next/image";
import styled from "styled-components";
import dummyBook from "../../public/img/dummy/dummy_book.png";

export default function Card({ children, book }) {
  return (
    <StyledCard>
      {book.coverImg ? (
        <Image
          src={book.coverImg}
          width={70}
          height={100}
          alt={book.title}
          priority
        />
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
        <h2>{book.author}</h2>
        <h3>{book.title}</h3>
        <h4>{book.subtitle}</h4>
      </StyledBookOverview>
      {/* children for the edit link on a card*/}
      {children}
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
