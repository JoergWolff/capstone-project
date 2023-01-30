import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import BookForm from "@/components/BookForm/BookForm";
import Bottom from "@/components/Bottom/Bottom";

export default function EditBookPage({ data, onEditSubmit }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id === id);

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }

  return (
    <>
      <StyledEdit>
        <BookForm book={currentBook} onEditSubmit={onEditSubmit} />
      </StyledEdit>
      <Bottom>
        <StyledLink href={`/detail/book/${currentBook.id}/detail`}>
          Back
        </StyledLink>
        <StyledLink href={`/`}>Home</StyledLink>
        <StyledButton type="submit" form="book-form">
          Save
        </StyledButton>
      </Bottom>
    </>
  );
}

const StyledEdit = styled.div`
  position: absolute;
  top: var(--main-content-top);
  right: 0;
  bottom: var(--main-content-bottom);
  left: 0;
  overflow: scroll;
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

const StyledButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;
