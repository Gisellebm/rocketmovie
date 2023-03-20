import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11.6rem;

    display: flex;
    align-items: center;
    padding: 2.4rem 12.3rem;
    justify-content: space-between;
    gap: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
    }

    @media (max-width: 40rem) {
        gap: 3.2rem;
    }
`;

export const Profile = styled.div`
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

