import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;


    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 0.8rem;
    border-radius: 1rem;
    border: none;

    > input {
        height: 5.6rem;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        padding: 1.9rem;

        &:placeholder {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }        
    }

    > svg {
        margin-left: 1.6rem;
    }
`;