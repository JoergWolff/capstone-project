import styled from "styled-components";

export default function Bottom({ children }) {
  return <StyledBottom>{children}</StyledBottom>;
}

const StyledBottom = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: var(--main-top-padding);
  border-top: var(--main-top-bottom-border);
  background-color: var(--main-bottom-background-color);
  z-index: 2;
`;
