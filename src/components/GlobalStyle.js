import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font: 400 16px/1.5 Montserrat, sans-serif;
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: Cinzel, serif;
    font-weight: 700;

    a {
      text-decoration: none;
    }
  }

  a {
    color: #005882;

    &:hover {
      text-decoration: none;
    }
  }
`

export default GlobalStyle
