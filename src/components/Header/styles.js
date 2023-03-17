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
        color: ${({ theme }) => theme.COLORS.PINK_200};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: end;

    > div {
        display: flex;
        flex-direction: column;

        margin-right: 1rem;

        font-size: 1.4rem;
        line-height: 1.8rem;

        p {
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a {
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    
    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }
`;

