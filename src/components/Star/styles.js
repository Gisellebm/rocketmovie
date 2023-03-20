import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;
    line-height: 0;

    .full > svg {
        fill: ${({ theme }) => theme.COLORS.PINK};
    }

    > li > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;