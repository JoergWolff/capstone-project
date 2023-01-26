import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card/Card";
import Bottom from "@/components/Bottom/Bottom";

export default function DetailBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id === parseInt(id));

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }
  return (
    <StyledDetail>
      <Card book={currentBook} />
      <StyledCard>
        <StyledId>
          <span>ID:</span>
          <span>{currentBook.id}</span>
        </StyledId>
        <h4>Teaser:</h4>
        <StyledArticle>{currentBook.teaser}</StyledArticle>
      </StyledCard>
      <Bottom>
        <StyledLink href={`/`}>Back</StyledLink>
        <StyledLink href={`/detail/book/${currentBook.id}/edit`}>
          Edit
        </StyledLink>
      </Bottom>
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  position: absolute;
  top: var(--main-content-top);
  right: 0;
  bottom: var(--main-content-bottom);
  left: 0;
  overflow: scroll;
`;

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

const StyledArticle = styled.article`
  padding-top: 5px;
`;

const StyledLink = styled(Link)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 70px;
  color: brown;
  text-align: center;
  text-decoration: none;
`;
