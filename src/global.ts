import { createGlobalStyle } from "styled-components";
import GimletRegular from "../src/assets/fonts/GimletMicroCompressed-Regular.otf";
import GimletBold from "../src/assets/fonts/GimletMicroCompressed-Bold.otf";
import GimletLight from "../src/assets/fonts/GimletMicroCompressed-Light.otf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gimlet Micro';
    src: url(${GimletRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

   @font-face {
    font-family: 'Gimlet Micro';
    src: url(${GimletBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

    @font-face {
    font-family: 'Gimlet Micro';
    src: url(${GimletLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
    }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background-color: #1c1c1c;
    margin: auto;
    font-family: 'Gimlet Micro', sans-serif;
  }
`