import { createGlobalStyle } from 'styled-components'

import { mainColor } from 'utils/constants'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%
  }

  body {
    font-family: Merriweather, Georgia, serif;
    margin: 0;
    box-sizing: border-box;
    color: #333;
    font-size: 1.6rem;
    line-height: 150%;
    letter-spacing: 15%;
    word-spacing: 20%;
  }

  *, *::after, *::before {
    box-sizing: inherit;
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
    color: ${mainColor};

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

  .gatsby-highlight {
    overflow: auto;
    font-size: 12px;
  }
`

export default GlobalStyle
