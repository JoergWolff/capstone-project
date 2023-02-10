import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";

export default function Top() {
  const { data, isLoading, error } = useSWR("/api/books/", fetcher);
  if (error) {
    return <h2>Check your connections...</h2>;
  }
  return (
    <StyledHeader>
      <h1>MEDIA DB</h1>
      {isLoading ? null : <span>{data.length} books</span>}
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
