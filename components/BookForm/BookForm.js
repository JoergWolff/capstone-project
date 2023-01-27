import Image from "next/image";
import styled from "styled-components";
import dummyBook from "../../public/img/dummy/dummy_book.png";

export default function BookForm({ book }) {
  return (
    <StyledForm>
      <StyledTopForm>
        {book.coverImg ? (
          <Image
            src={book.coverImg}
            width={70}
            height={100}
            alt={book.title}
            priority
          />
        ) : (
          <Image
            src={dummyBook}
            width={70}
            height={100}
            alt="No picture"
            priority
          />
        )}
      </StyledTopForm>

      <label htmlFor="author-input">Author:</label>
      <input defaultValue={book?.author} type="text" id="author-input" />

      <label htmlFor="title-input">Title:</label>
      <input defaultValue={book?.title} type="text" id="title-input" />

      <label htmlFor="subtitle-input">Subtitle:</label>
      <input defaultValue={book?.subtitle} type="text" id="subtitle-input" />

      <label htmlFor="teaser-input">Teaser:</label>
      <textarea defaultValue={book?.teaser} id="teaser-input" rows="20" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledTopForm = styled.div`
  display: flex;
  flex-direction: row;
`;
