"use client"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gimlet Micro';
    src: url('/fonts/GimletMicroCompressed-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

   @font-face {
    font-family: 'Gimlet Micro';
    src: url('fonts/GimletMicroCompressed-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

    @font-face {
    font-family: 'Gimlet Micro';
    src: url('/fonts/GimletMicroCompressed-Light.otf') format('opentype');
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