import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    padding: 4.7rem 12.3rem 5.8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
    overflow-y: auto;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 32px;
            line-height: 42px;
        }
    }


`;

export const Notes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;