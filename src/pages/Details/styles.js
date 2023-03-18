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
        overflow-y: auto;
        padding: 4rem 0;
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;

        > h1 {
            font-weight: 500;
            font-size: 3.6rem;
            line-height: 4.7rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > .user {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            height: 1.9rem;

            img {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
            }

            span {
                font-family: 'Roboto', serif;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.9rem;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

        }

        > article {

            p {
                line-height: 2.1rem;
                text-align: justify;
            }

            p:first-of-type {
                margin-bottom: 2.4rem;
            }
        }
    }

`;