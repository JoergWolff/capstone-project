import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    // Main
    --main-background-color: ivory;
    --main-color: brown;
    --main-margin: 10px;
    // Positioning
    --main-content-top: 60px;
    --main-content-bottom: 55px;
    // Top
    --main-top-background-color: ivory;
    --main-top-padding: 10px;
    --main-top-bottom-border: 1px solid gray;
    // Card
    --main-card-background-color: white;
    --main-card-border: 1px solid red;
    --main-card-border-radius: 20px;
    --main-card-padding: 10px;
    // Bottom
    --main-bottom-background-color: ivory;
    // Links-Buttons
    --main-link-button-width: 70px;
    --main-link-button-padding: 5px;
    --main-link-button-border: 1px solid red;
    --main-link-button-border-radius: 5px;
    --main-link-button-color: brown;

  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: system-ui;
    background-color: var(--main-background-color);
    color: var(--main-color);
  }

  label {
    margin-top: 5px;
  }

  input {
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px;
  }

  textarea {
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px;
    resize: none;
  }
`;
