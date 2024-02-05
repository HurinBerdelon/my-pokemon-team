import styled from "styled-components";

export const PresentationHeaderContainer = styled.div`

    h2 {
        padding: 0.25rem 1rem;
        text-align: center;
    }

    p {
        padding: 0.25rem 1rem;
        text-align: justify;

        span {
            font-weight: 700;
            color: ${props => props.theme.colors.buttons};
            cursor: pointer;
        }
    }
`