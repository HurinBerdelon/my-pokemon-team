import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    background: ${props => props.theme.colors.boxOne};
    color: ${props => props.theme.colors.textTwo};

    position: relative;
`