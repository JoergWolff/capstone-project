import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Card from "@/components/Card/Card";
import Bottom from "@/components/Bottom/Bottom";

export default function HomePage({ data }) {
  return (
    <>
      <StyledHome>
        <ul>
          {data.map((book) => (
            <li key={book.id}>
              <Card book={book}>
                <Link href={`/detail/book/${book.id}/detail`}>
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
      </StyledHome>
      <Bottom>
        <StyledLinkPlaceholder />
        <StyledLink href="/book/create">New</StyledLink>
      </Bottom>
    </>
  );
}

const StyledHome = styled.div`
  position: absolute;
  top: var(--main-content-top);
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
`;

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
