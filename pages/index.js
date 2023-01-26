import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Card from "@/components/Card/Card";

export default function HomePage({ data }) {
  return (
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
  border: 1px solid black;
`;
