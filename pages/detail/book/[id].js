import styled from "styled-components";
import { useRouter } from "next/router";
import Card from "@/components/Card/Card";

export default function DetailBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id == id);

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }
  return (
    <>
      <Card book={currentBook} />
      <StyledCard>
        <StyledId>
          <span>ID:</span>
          <span>{currentBook.id}</span>
        </StyledId>
        <h4>Teaser:</h4>
        <article>{currentBook.teaser}</article>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  margin: var(--main-margin);
  background-color: var(--main-card-background-color);
  border: var(--main-card-border);
  border-radius: var(--main-card-border-radius);
  padding: var(--main-card-padding);
`;

const StyledId = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
