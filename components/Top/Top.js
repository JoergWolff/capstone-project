import styled from "styled-components";

export default function Top({ bookcounter }) {
  return (
    <>
      <StyledHeader>
        <h1>MEDIA DB</h1>
        {bookcounter ? <span>{bookcounter} books</span> : ``}
      </StyledHeader>
      <hr />
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
