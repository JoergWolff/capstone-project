import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@/components/Card/Card";
import Bottom from "@/components/Bottom/Bottom";

export default function DetailBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id == id);

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
        <Link href={`../../`} className="link_back">
          Back
        </Link>
      </Bottom>
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  position: absolute;
  top: var(--main-content-top);
  right: 0px;
  bottom: var(--main-content-bottom);
  left: 0px;
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
