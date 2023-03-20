import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BROWN};

    border: none;
    border-radius: 1.6rem;

    padding: 3.2rem;
    margin-bottom: 2.4rem;

    > h1 {
        flex: 1;
        text-align: left;
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 0.8rem;
    }

    > svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    .description > p {
        font-family: 'Roboto';
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 1.5rem 0;
    }

`;