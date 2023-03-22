import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};

    height: 4.8rem;
    border: none;
    margin-top: 1.6rem;
    padding: 0 3.2rem;
    border-radius: 1rem;
    font-weight: 500;
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:disabled {
        opacity: 0.5;
        filter: none;
        cursor: default;
    }   
`;