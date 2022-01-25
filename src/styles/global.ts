import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        height: 100vh;

        -webkit-font-smoothing: antialiased;
        font-family: Inter;
    }

    h1, strong {
        font-family: 700;
    }

    h2 {
        font-weight: 400;
    }

    button {
        font-family: Poppins;
        font-weight: 700;

        cursor: pointer;
        border: 0;
        outline: 0;
    }

    a {
        text-decoration: none;
        text-transform: none;
    }
`