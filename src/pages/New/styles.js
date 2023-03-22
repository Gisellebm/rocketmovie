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
        padding: 0 12.3rem;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 8.8rem;
        width: 100%;
        gap: 2.4rem;
        padding: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 0.8rem;
    }

    .twoColumns {
        columns: 2;
        gap: 4rem;
    }

    .btnTwoColumns {
        display: flex;
        gap: 4rem;

        > .special {
            background-color: ${({ theme} ) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme} ) => theme.COLORS.PINK};
        }
    }

`;

export const Form = styled.form`
    width: 100%;
    max-width: 113.6rem;
    margin: 4rem auto;
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

    h3 {
        font-weight: 400;
        font-size: 2.0rem;
        line-height: 2.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

`;