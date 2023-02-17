import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";
import StyledContent from "@/components/StyledContent/StyledContent";
import BookForm from "@/components/BookForm/BookForm";
import StyledNavigation from "@/components/StyledNavigation/StyledNavigation";

export default function EditBookPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: currentBook,
    error,
    isLoading,
  } = useSWR(`/api/books/${id}`, fetcher);
  if (error) {
    return <h2>Check your connections...</h2>;
  }

  async function handleSubmit(book) {
    await fetch(`/api/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
    });
    router.push(`/books/details/${id}/detail`);
  }

  return (
    <>
      {isLoading ? (
        <>
          <StyledContent />
          <StyledNavigation>
            <StyledLinkPlaceholder />
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledLinkPlaceholder />
          </StyledNavigation>
        </>
      ) : (
        <>
          <StyledContent>
            <BookForm book={currentBook} onSubmit={handleSubmit} />
          </StyledContent>
          <StyledNavigation>
            <StyledLink href={`/books/details/${currentBook.id}/detail`}>
              Back
            </StyledLink>
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledButton type="submit" form="book-form">
              Save
            </StyledButton>
          </StyledNavigation>
        </>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  text-decoration: none;
`;

const StyledButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;

const StyledLinkPlaceholder = styled.div`
  width: var(--main-link-button-width);
`;
