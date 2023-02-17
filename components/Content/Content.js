import styled from "styled-components";

export default function Content({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.div`
  position: absolute;
  top: var(--main-content-top);
  right: 0;
  bottom: var(--main-content-bottom);
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
`;
