import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card/Card";
import Navigation from "@/components/Navigation/Navigation";

export default function DetailBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id === id);

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }
  return (
    <StyledDetail>
      <Card book={currentBook} />
      <StyledCard>
        <StyledId>
          <span>ID:</span>
          <span>{currentBook.internalId}</span>
        </StyledId>
        <h4>Teaser:</h4>
        <StyledArticle>{currentBook.teaser}</StyledArticle>
      </StyledCard>
      <Navigation>
        <StyledLinkPlaceholder></StyledLinkPlaceholder>
        <StyledLink href={`/`}>Home</StyledLink>
        <StyledLink href={`/detail/book/${currentBook.id}/edit`}>
          Edit
        </StyledLink>
      </Navigation>
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
  overflow-wrap: break-word;
`;

const StyledLink = styled(Link)`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  text-decoration: none;
`;

const StyledLinkPlaceholder = styled.div`
  width: var(--main-link-button-width);
`;
