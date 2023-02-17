import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";
import StyledContent from "@/components/StyledContent/StyledContent";
import Card from "@/components/Card/Card";
import StyledNavigation from "@/components/StyledNavigation/StyledNavigation";
import ModalDelete from "@/components/ModalDelete/ModalDelete";

export default function DetailBookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isVisible, setIsVisible] = useState(false);

  const {
    data: currentBook,
    error,
    isLoading,
  } = useSWR(`/api/books/${id}`, fetcher);
  if (error) {
    return <h2>Check your connections...</h2>;
  }

  function toggleVisible() {
    setIsVisible(!isVisible);
  }
  async function handleDelete() {
    await fetch(`/api/books/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  function handleCancel() {
    toggleVisible();
  }

  return (
    <StyledContent>
      {isLoading ? (
        <StyledNavigation>
          <StyledLinkPlaceholder />
          <StyledLink href={`/`}>Home</StyledLink>
          <StyledLinkPlaceholder />
        </StyledNavigation>
      ) : (
        <>
          <ModalDelete
            book={currentBook}
            onDelete={handleDelete}
            onCancel={handleCancel}
            isVisible={isVisible}
          />
          <Card book={currentBook}>
            <StyledButton onClick={toggleVisible}>
              <StyledImage
                src="/img/icons/delete.svg"
                height={30}
                width={30}
                alt="delete"
                hidden={isVisible}
              />
            </StyledButton>
          </Card>
          <StyledCard>
            <StyledId>
              <span>ID:</span>
              <span>{currentBook.internalId}</span>
            </StyledId>
            <h4>Teaser:</h4>
            <StyledArticle>{currentBook.teaser}</StyledArticle>
          </StyledCard>

          <StyledNavigation>
            <StyledLinkPlaceholder />
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledLink href={`/books/details/${currentBook.id}/edit`}>
              Edit
            </StyledLink>
          </StyledNavigation>
        </>
      )}
    </StyledContent>
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

const StyledButton = styled.button`
  border: none;
  background-color: var(--main-card-background-color);
`;

const StyledImage = styled(Image)`
  border: var(--main-link-button-border);
`;
