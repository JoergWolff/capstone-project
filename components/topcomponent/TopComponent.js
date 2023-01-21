import styled from "styled-components";

export default function TopComponent({ bookcounter }) {
  return (
    <StyledHead>
      <h1>MEDIA DB</h1>
      <span>{bookcounter}</span>
    </StyledHead>
  );
}

const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
