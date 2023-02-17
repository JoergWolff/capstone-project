import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "@/helpers/database/fetcher";
import StyledContent from "@/components/StyledContent/StyledContent";
import Card from "@/components/Card/Card";
import StyledNavigation from "@/components/StyledNavigation/StyledNavigation";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/books/", fetcher);
  if (error) {
    return <h2>Check your connections...</h2>;
  }
  return (
    <>
      <StyledContent>
        <ul>
          {isLoading
            ? null
            : data
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((book) => (
                  <li key={book.id}>
                    <Card book={book}>
                      <Link href={`/books/details/${book.id}/detail`}>
                        <StyledImage
                          src="/img/icons/info.svg"
                          height={30}
                          width={30}
                          alt="info"
                        />
                      </Link>
                    </Card>
                  </li>
                ))}
        </ul>
      </StyledContent>
      <StyledNavigation>
        <StyledLinkPlaceholder />
        <StyledLink href="/books/create">New</StyledLink>
      </StyledNavigation>
    </>
  );
}

const StyledImage = styled(Image)`
  border: var(--main-link-button-border);
`;

const StyledLink = styled(Link)`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: var(--main-link-button-padding);
  width: var(--main-link-button-width);
  color: var(--main-link-button-color);
  text-align: center;
  text-decoration: none;
`;

const StyledLinkPlaceholder = styled.div`
  width: var(--main-link-button-width);
`;
