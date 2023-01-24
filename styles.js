import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    // Main
    --main-background-color: ivory;
    --main-color: brown;
    --main-margin: 10px;
    // Top
    --main-top-padding: 10px;
    --main-top-bottom-border: 1px solid gray;
    // Cards
    --main-card-background-color: white;
    --main-card-border: 1px solid red;
    --main-card-border-radius: 20px;
    --main-card-padding: 10px;
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
.image_icon_edit{
/*   border: 1px solid black;
  border-radius: 50%; */
  fill: red;
  position: relative;
  bottom: -70px;
  right: -70px;
}

`;
