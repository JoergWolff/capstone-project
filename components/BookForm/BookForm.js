import Image from "next/image";
import styled from "styled-components";
import dummyBook from "../../public/img/dummy/dummy_book.png";

export default function BookForm({ book, onEditSubmit, onNewSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (book) {
      onEditSubmit(data);
    } else {
      onNewSubmit(data);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit} id="book-form">
      <StyledTopForm>
        {book?.coverImg ? (
          <Image
            src={book?.coverImg}
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
      <input
        defaultValue={book?.id}
        type="text"
        id="id-input"
        name="id"
        hidden
      />

      <input
        defaultValue={book?.coverImg}
        type="text"
        id="coverImg-input"
        name="coverImg"
        hidden
      />

      <label htmlFor="author-input">Author:</label>
      <input
        defaultValue={book?.author}
        type="text"
        id="author-input"
        name="author"
        maxLength={40}
        required
      />

      <label htmlFor="title-input">Title:</label>
      <input
        defaultValue={book?.title}
        type="text"
        id="title-input"
        name="title"
        maxLength={40}
        required
      />

      <label htmlFor="subtitle-input">Subtitle:</label>
      <input
        defaultValue={book?.subtitle}
        type="text"
        id="subtitle-input"
        name="subtitle"
        maxLength={40}
      />

      <label htmlFor="teaser-input">Teaser:</label>
      <textarea
        defaultValue={book?.teaser}
        id="teaser-input"
        rows="20"
        name="teaser"
        maxLength={500}
      />
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
