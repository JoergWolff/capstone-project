import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import StyledContent from "@/components/StyledContent/StyledContent";
import StyledNavigation from "@/components/StyledNavigation/StyledNavigation";

export default function SearchBookPage() {
  const [toggleSection, setToggleSection] = useState(true);

  function handelToggleSection() {
    setToggleSection(!toggleSection);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isbn) {
      console.log("ISBN:", data);
    } else {
      console.log("Author and Title", data);
    }
    /* getIsbnByAuthorAndTitle(data.author, data.title); */
  }

  return (
    <>
      <StyledContent>
        {toggleSection ? (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search by ISBN
            </StyledButton>
            <StyledH3>Search by Author and Title:</StyledH3>
            <StyledForm
              onSubmit={handleSubmit}
              id="author-title-form"
              autoComplete="off"
            >
              <label htmlFor="author-input">Author:</label>
              <input id="author-input" name="author" maxLength="30" required />
              <label htmlFor="title-input">Title:</label>
              <input id="title-input" name="title" maxLength="30" required />
            </StyledForm>
          </StyledSection>
        ) : (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search by Author and Title
            </StyledButton>
            <StyledH3>Search by ISBN:</StyledH3>
            <StyledForm
              onSubmit={handleSubmit}
              id="author-title-form"
              autoComplete="off"
            >
              <label htmlFor="isbn-input">ISBN:</label>
              <input
                id="isbn-input"
                name="isbn"
                minLength="10"
                maxLength="13"
                required
              />
            </StyledForm>
          </StyledSection>
        )}
        <StyledSearchButton type="submit" form="author-title-form">
          Search
        </StyledSearchButton>
      </StyledContent>
      <StyledNavigation>
        <StyledLinkPlaceholder />
        <StyledLink href="/">Home</StyledLink>
        <StyledLinkPlaceholder />
      </StyledNavigation>
    </>
  );
}

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: 10px;
  width: 100%;
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;

const StyledH3 = styled.h3`
  display: block;
  text-align: center;
  padding-top: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledSearchButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: 10px;
  margin: 10px 10% 20px 10%;
  width: 80%;
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
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
