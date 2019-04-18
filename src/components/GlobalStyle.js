import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font: 16px/1.5 Montserrat, sans-serif;
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: Cinzel, serif;
    font-weight: 100;
    line-height: 0.9;

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

  blockquote {
    margin: 0;
    border-left: 5px solid rgba(0, 88, 130, .3);
    padding: 0 1em;

    font-style: italic;
    font-weight: 300;
  }
`

export default GlobalStyle
