import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    padding: 0 1.6rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
    border: ${({ theme, isNew }) => isNew ? `0.2rem dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 1rem;   

    > button {
        border: none;
        background: none;

        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        line-height: 2.4rem;
    }

    > input {
        height: 5.6rem;
        width: 100%;
 
        line-height: 1.6rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        &:disabled {
            display: none;
        }
    }
`;