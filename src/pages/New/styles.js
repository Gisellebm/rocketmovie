import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Form = styled.form`
    max-width: 113.7rem;
    margin: 4rem auto 8.5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > header {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        h1 {
            font-size: 3.6rem;
            line-height: 4.7rem;
            font-weight: 500;
        }
    }

    .twoColumns {
        columns: 2;
        gap: 4rem;
    }
`;