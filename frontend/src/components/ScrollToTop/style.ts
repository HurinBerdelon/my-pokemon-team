import styled from "styled-components";

export const ScrollToTopContainer = styled.div`
    position: fixed;
    bottom: 0.15rem;
    right: 1rem;
    background: ${props => props.theme.colors.buttons};
    width: 32px;
    height: 32px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        svg {
            margin-top: 0.25rem;
            font-size: 1.35rem;
            color: ${props => props.theme.colors.textThree}
        }
    }
`