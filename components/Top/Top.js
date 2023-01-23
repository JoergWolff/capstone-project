import styled from "styled-components";

export default function Top({ bookcounter }) {
  return (
    <StyledHeader>
      <h1>MEDIA DB</h1>
      {bookcounter && <span>{bookcounter}</span>}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: var(--main-top-padding);
  border-bottom: var(--main-top-bottom-border);
`;
