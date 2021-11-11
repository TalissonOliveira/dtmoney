import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    button {
        background: var(--blue-light);
        color: #FFF;
        height: 3rem;
        padding: 0 2rem;

        font-weight: 600;
        font-size: 1rem;

        border: none;
        border-radius: .25rem;

        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }
    }
`