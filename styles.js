import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --main-background-color: ivory;
    --main-color: brown;
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
`;
