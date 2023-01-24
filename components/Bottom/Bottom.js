import styled from "styled-components";

export default function Bottom({ children }) {
  return <StyledBottom>{children}</StyledBottom>;
}

const StyledBottom = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: var(--main-top-padding);
  border-top: var(--main-top-bottom-border);
`;
