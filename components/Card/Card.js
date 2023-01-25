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
      <StyledChildren>{children}</StyledChildren>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin: var(--main-margin);
  padding: var(--main-card-padding);
  background-color: var(--main-card-background-color);
  border: var(--main-card-border);
  border-radius: var(--main-card-border-radius);
`;

const StyledBookOverview = styled.div`
  width: 65%;
  padding-left: 10px;
`;

const StyledChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
