import styled from "styled-components";

export default function TopComponent({ bookcounter }) {
  return (
    <>
      <StyledHead>
        <h1>MEDIA DB</h1>
        {bookcounter ? <span>{bookcounter} books</span> : ``}
      </StyledHead>
      <hr />
    </>
  );
}

const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
