import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * { box-sizing: border-box }
  body {
    color: #333;
    background: #fafafa;
    font-family: 'Montserrat', sans-serif;
    transition: color .25s linear, background .3s ease-in-out;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`

export default GlobalStyle
