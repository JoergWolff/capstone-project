import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import BookForm from "@/components/BookForm/BookForm";
import Bottom from "@/components/Bottom/Bottom";

export default function EditBookPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const currentBook = data.find((book) => book.id === parseInt(id));

  if (!currentBook) {
    return <h1>404 An error occured...</h1>;
  }

  return (
    <>
      <StyledEdit>
        <BookForm book={currentBook} />
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
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 70px;
  color: brown;
  text-align: center;
  text-decoration: none;
`;

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 70px;
  color: brown;
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;
