import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background: #F0F2F5;

        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;

        --text-title: #363F5F;
        --text-body: #969CB2;

        --input-background: #E7E9EE;
        --input-border: #D7D7D7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
`