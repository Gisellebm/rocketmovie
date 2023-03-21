import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;
        background-color: ${({ theme }) => theme.COLORS.BROWN};

        display: flex;
        align-items: center;

        padding: 0 14.4rem;

        > a {
            display: flex;
            align-items: center;
            width: 7.2rem;
            height: 2.1rem;
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 1.6rem;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                margin-right: 0.8rem;  
            }
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -12.4rem auto 6.4rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        border-radius: 50%;
        width: 18.6rem;
        height: 18.6rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

    }

`;