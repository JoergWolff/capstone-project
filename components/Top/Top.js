import styled from "styled-components";

export default function Top({ bookcounter }) {
  return (
    <StyledHeader>
      <h1>MEDIA DB</h1>
      {bookcounter && <span>{bookcounter} books</span>}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: var(--main-top-padding);
  border-bottom: var(--main-top-bottom-border);
  background-color: var(--main-top-background-color);
  z-index: 1;
`;
