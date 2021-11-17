import styled from "styled-components"
import { darken } from "polished"

export const Container = styled.form`
    h2 {
        color: var(--text-title);

        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        background: #e7e9ee;
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        border-radius: .25rem;
        border: 1px solid #d7d7d7;

        font-size: 1rem;
        font-weight: 400;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"] {
        background: var(--green);
        color: #fff;
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        margin-top: 1.5rem;

        border: 0;
        border-radius: .25rem;

        font-size: 1rem;
        font-weight: 600;

        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
    margin: 1rem 0;

    button {
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;

        border: 1px solid #d7d7d7;
        border-radius: .25rem;

        transition: border-color .2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            color: var(--text-title);
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
        }

    }
`