import Image from "next/image";
import styled from "styled-components";
import dummyBook from "../../public/img/dummy/dummy_book.png";

export default function Card({ coverimage, author, title, subtitle }) {
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
        <h3>{subtitle}</h3>
      </StyledBookOverview>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: var(--main-margin);
  padding: var(--main-card-padding);
  background-color: var(--main-card-background-color);
  border: var(--main-card-border);
  border-radius: var(--main-card-border-radius);
`;

const StyledBookOverview = styled.div`
  padding: 0px 0px 0px 10px;
`;
