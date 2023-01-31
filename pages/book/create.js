import Link from "next/link";
import styled from "styled-components";
import BookForm from "@/components/BookForm/BookForm";
import Navigation from "@/components/Navigation/Navigation";

export default function CreateBookPage({ onNewSubmit }) {
  return (
    <StyledMain>
      <BookForm onSubmit={onNewSubmit} />
      <Navigation>
        <StyledLinkPlaceholder />
        <StyledLink href="/">Home</StyledLink>
        <StyledButton type="submit" form="book-form">
          Save
        </StyledButton>
      </Navigation>
    </StyledMain>
  );
}

const StyledMain = styled.div`
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

const StyledLinkPlaceholder = styled.div`
  width: var(--main-link-button-width);
`;
