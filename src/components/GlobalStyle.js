import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font: 14px/1.5 Merriweather, Georgia, serif;
    margin: 0;
    box-sizing: border-box;
    color: #333;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-family: Cinzel, serif;
    font-weight: 100;
    line-height: 0.9;
  }

  a {
    color: #005882;
    cursor: pointer;
    text-decoration: underline;

    &:not(.no-orb) {
      position: relative;
      text-decoration: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;

      &::after {
        content: '';

        display: block;
        margin: -4px 0 0 -4px;
        width: 8px;
        height: 8px;

        position: absolute;
        left: 50%;
        top: -12px;
        background: #005882 radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.6) 10%, transparent 60%);
        box-shadow: 0 2px 10px #005882;
        opacity: 0.6;
        border-radius: 50%;
        pointer-events: none;
        transition: 0.3s;
        transform: scale(0.5);
        opacity: 0;
      }

      &:hover::after {
        opacity: 0.8;
        transform: scale(1);
      }
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
