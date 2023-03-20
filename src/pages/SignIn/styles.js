import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;


    > h1 {
        font-size: 4.8rem;
        line-height: 6.3rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_50};
    }

    > h2 {
        margin: 4.8rem 0;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
    }

    > a {
        margin-top: 4.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;