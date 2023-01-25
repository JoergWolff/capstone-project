import styled from "styled-components";

export default function Bottom({ children }) {
  return <StyledBottom>{children}</StyledBottom>;
}

const StyledBottom = styled.footer`
  position: fixed;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  padding: var(--main-top-padding);
  border-top: var(--main-top-bottom-border);
  background-color: var(--main-background-color);
  z-index: 2;
`;
