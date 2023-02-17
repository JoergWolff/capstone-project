import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";
import Content from "@/components/Content/Content";
import BookForm from "@/components/BookForm/BookForm";
import Navigation from "@/components/Navigation/Navigation";

export default function CreateBookPage() {
  const router = useRouter();
  let newInternalId = "";
  const {
    data: bookCounter,
    isLoading,
    error,
  } = useSWR(`/api/counter/book`, fetcher);
  if (error) {
    return <h2>Check your connections...</h2>;
  }

  isLoading
    ? (newInternalId = Math.floor(Math.random) * 1000000000)
    : (newInternalId = `${bookCounter.value + 1}`);

  async function handleCounter(counter) {
    const updatedCounter = {
      value: counter,
      type: "book",
    };
    await fetch("/api/counter/book", {
      method: "PATCH",
      body: JSON.stringify(updatedCounter),
    });
  }

  async function handleSubmit(data) {
    const newData = {
      ...data,
      internalId: `B-${newInternalId}`,
    };
    await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(newData),
    });
    handleCounter(newInternalId);
    router.push("/");
  }
  return (
    <Content>
      <BookForm onSubmit={handleSubmit} />
      <Navigation>
        <StyledLinkPlaceholder />
        <StyledLink href="/">Home</StyledLink>
        <StyledButton type="submit" form="book-form">
          Save
        </StyledButton>
      </Navigation>
    </Content>
  );
}

const StyledLink = styled(Link)`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  text-decoration: none;
`;

const StyledButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;

const StyledLinkPlaceholder = styled.div`
  width: var(--main-link-button-width);
`;
