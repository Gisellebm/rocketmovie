import styled from "styled-components";

export const Container = styled.span`
    width: 100%;
    height: 3rem;
    padding: 0.8rem 1.6rem;
    margin-right: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) =>theme.COLORS.BROWN};
    color: ${({ theme }) =>theme.COLORS.TEXT_TAG};
    font-size: 12px;
    line-height: 14px;
    font-family: 'Roboto', serif;
    font-weight: 400;
`;