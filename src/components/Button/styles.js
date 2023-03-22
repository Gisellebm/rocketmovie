import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};

    height: 4.8rem;
    border: none;
    margin-top: 1.6rem;
    padding: 0 1rem;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }   
`;