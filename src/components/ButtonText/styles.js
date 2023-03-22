import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    font-size: 1.6rem;
`;