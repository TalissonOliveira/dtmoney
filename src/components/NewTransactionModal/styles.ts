import styled from "styled-components"

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