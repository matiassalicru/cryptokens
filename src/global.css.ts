import { createGlobalStyle } from 'styled-components'
import { BACKGROUND_COLOR } from './utils/constants'

export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0 !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        background: ${BACKGROUND_COLOR};
    }
    html {
        scroll-behavior: smooth;
    }
`
