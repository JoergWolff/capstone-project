import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import StyledContent from "@/components/StyledContent/StyledContent";
import StyledNavigation from "@/components/StyledNavigation/StyledNavigation";

export default function SearchBookPage() {
  const [toggleSection, setToggleSection] = useState(true);
  const [allIsbn, setAllIsbn] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const [book, setBook] = useState({});

  function handelToggleSection() {
    setToggleSection(!toggleSection);
    setAllIsbn([]);
    setAllBooks([]);
    setCounter(0);
    setMessage("");

    if (document.getElementById("author-title-form")) {
      const form = document.getElementById("author-title-form");
      form.reset();
    }
    if (document.getElementById("isbn-form")) {
      const form = document.getElementById("isbn-form");
      form.reset();
    }
  }

  function handleFormsSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isbn) {
      switch (data.isbn.length) {
        case 10:
          setAllIsbn([data.isbn]);
          getBookByIsbn(data.isbn);
          break;
        case 13:
          setAllIsbn([data.isbn]);
          getBookByIsbn(data.isbn);
          break;
        default:
          setAllIsbn([]);
          break;
      }
    } else {
      getIsbnByAuthorAndTitle(data.author, data.title);
    }
  }

  function handleFormInputChange() {
    setAllIsbn([]);
    setAllBooks([]);
    setMessage("");
  }

  async function getIsbnByAuthorAndTitle(author, title) {
    const uri = `https://openlibrary.org/search.json?author=${author}&title=${title}`;
    try {
      let searchIsbn = [];
      const response = await fetch(uri);
      const data = await response.json();
      if (data.docs.length === 0) {
        setMessage("ISBN: No data found on open libary!");
        return;
      }
      data.docs.forEach((doc) => {
        doc.isbn.forEach((isbn) => {
          searchIsbn.push(isbn);
        });
      });
      searchIsbn.sort((a, b) => b - a);
      setAllIsbn([...searchIsbn]);
    } catch (error) {
      return;
    }
  }

  function handleIsbnSelect(event) {
    event.preventDefault();
    const isbn = event.target.value;
    getBookByIsbn(isbn);
  }

  function handleIsbnCounter() {
    const counter = document.getElementById("isbn-input").value.length;
    setAllIsbn([]);
    setAllBooks([]);
    setCounter(counter);
    setMessage("");
  }

  async function getBookByIsbn(isbn) {
    setAllIsbn([]);
    setAllBooks([]);
    setMessage("");

    const uri = `https://openlibrary.org/search.json?isbn=${isbn}`;

    try {
      const response = await fetch(uri);
      const data = await response.json();
      switch (data.docs.length) {
        case 0:
          setMessage("Book: No data found on open libary!");
          break;
        case 1:
          //
          console.log(data);
          //
          break;
        default:
          setMessage("Book: Found more than one book!");
          setAllBooks(data.docs);
      }
    } catch (error) {
      return;
    }
  }

  function handleTitleSelect(event) {
    event.preventDefault();
    const book = JSON.parse(event.target.value);
    console.log(book);
  }

  return (
    <>
      <StyledContent>
        {toggleSection ? (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search book by ISBN
            </StyledButton>
            <StyledH3>Search ISBN by Author and Title:</StyledH3>
            <StyledForm
              onSubmit={handleFormsSubmit}
              id="author-title-form"
              autoComplete="off"
            >
              <label htmlFor="author-input">Author:</label>
              <input
                id="author-input"
                name="author"
                maxLength="30"
                autoFocus
                required
                onKeyUp={handleFormInputChange}
              />
              <label htmlFor="title-input">Title:</label>
              <input
                id="title-input"
                name="title"
                maxLength="30"
                required
                onKeyUp={handleFormInputChange}
              />
            </StyledForm>
            {allIsbn.length > 0 ? (
              <>
                <StyledLabel htmlFor="isbn-select">Choose an ISBN</StyledLabel>
                <StyledSelect
                  id="isbn-select"
                  type="text"
                  onChange={handleIsbnSelect}
                >
                  <option value="">Choose an ISBN</option>
                  {allIsbn.map((isbn) => (
                    <option key={isbn} value={isbn}>
                      {isbn}
                    </option>
                  ))}
                </StyledSelect>
              </>
            ) : message ? (
              <>
                <StyledSearchButton type="submit" form="author-title-form">
                  Search
                </StyledSearchButton>
                <StyledH3>{message}</StyledH3>
              </>
            ) : (
              <StyledSearchButton type="submit" form="author-title-form">
                Search
              </StyledSearchButton>
            )}
          </StyledSection>
        ) : (
          <StyledSection>
            <StyledButton onClick={handelToggleSection}>
              Search ISBN by Author and Title
            </StyledButton>
            <StyledH3>Search book by ISBN:</StyledH3>
            <StyledForm
              onSubmit={handleFormsSubmit}
              id="isbn-form"
              autoComplete="off"
            >
              <label htmlFor="isbn-input">
                ISBN 10 or ISBN 13:
                <br />
                You have entered <strong>{counter}</strong> characters:
              </label>
              <input
                id="isbn-input"
                name="isbn"
                minLength="10"
                maxLength="13"
                autoFocus
                required
                onKeyUp={handleIsbnCounter}
              />
            </StyledForm>
            {message ? (
              allBooks.length > 0 ? (
                <>
                  <StyledLabel htmlFor="title-select">
                    Choose a title
                  </StyledLabel>
                  <StyledSelect id="title-select" onChange={handleTitleSelect}>
                    <option value="">Choose a title</option>
                    {allBooks.map((doc) => (
                      <option key={doc.key} value={JSON.stringify(doc)}>
                        Author:&nbsp;
                        {doc.author_name ? doc.author_name : ""}
                        &nbsp;Title:&nbsp;
                        {doc.title ? doc.title : ""}
                      </option>
                    ))}
                  </StyledSelect>
                </>
              ) : (
                <>
                  <StyledSearchButton type="submit" form="isbn-form">
                    Search
                  </StyledSearchButton>
                  <StyledH3>{message}</StyledH3>
                </>
              )
            ) : (
              <StyledSearchButton type="submit" form="isbn-form">
                Search
              </StyledSearchButton>
            )}
          </StyledSection>
        )}
      </StyledContent>
      <StyledNavigation>
        <StyledLinkPlaceholder />
        <StyledLink href="/">Home</StyledLink>
        <StyledLinkPlaceholder />
      </StyledNavigation>
    </>
  );
}

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: 10px;
  width: 100%;
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
`;

const StyledH3 = styled.h3`
  display: block;
  text-align: center;
  padding-top: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledSelect = styled.select`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: 5px;
  margin: 0 10px 20px 10px;
`;

const StyledLabel = styled.label`
  padding-left: 10px;
`;

const StyledSearchButton = styled.button`
  border: var(--main-link-button-border);
  border-radius: var(--main-link-button-border-radius);
  padding: 10px;
  margin: 10px 10% 20px 10%;
  width: 80%;
  color: var(--main-link-button-color);
  text-align: center;
  background-color: var(--main-bottom-background-color);
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
