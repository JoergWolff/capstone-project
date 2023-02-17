import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";
import Content from "@/components/Content/Content";
import BookForm from "@/components/BookForm/BookForm";
import Navigation from "@/components/Navigation/Navigation";

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
          <Content />
          <Navigation>
            <StyledLinkPlaceholder />
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledLinkPlaceholder />
          </Navigation>
        </>
      ) : (
        <>
          <Content>
            <BookForm book={currentBook} onSubmit={handleSubmit} />
          </Content>
          <Navigation>
            <StyledLink href={`/books/details/${currentBook.id}/detail`}>
              Back
            </StyledLink>
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledButton type="submit" form="book-form">
              Save
            </StyledButton>
          </Navigation>
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
