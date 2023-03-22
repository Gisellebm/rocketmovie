import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11.6rem;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

`;

export const Content = styled.div`
    width: calc(100% - 25.5rem);

    margin: 0 auto;
    display: flex;

    align-items: center;
    gap: 6.4rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
    }

`;

export const Profile = styled(Link)`
    display: flex;
    justify-self: end;
    align-items: center;
    

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: end;
        margin-right: 1rem;

        font-size: 1.4rem;
        line-height: 2rem;

        strong {
            color: ${({ theme }) => theme.COLORS.WHITE};
            white-space: nowrap;
        }

        button {
            background-color: transparent;
            border: none;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        button:hover {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    
    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }
`;

