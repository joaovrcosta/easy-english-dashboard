import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
  }

html,
body,
root {
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box !important;
  font-family: 'Roboto';
}

h1,
h2,
h3,
p,
span {
  color: #10162f;
}

`
