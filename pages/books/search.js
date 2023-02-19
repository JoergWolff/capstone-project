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

  return (
    <>
      <StyledContent>
        {toggleSection ? (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search by ISBN
            </StyledButton>
            <StyledH3>Search by Author and Title:</StyledH3>
          </StyledSection>
        ) : (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search by Author and Title
            </StyledButton>
            <StyledH3>Search by ISBN:</StyledH3>
          </StyledSection>
        )}
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
