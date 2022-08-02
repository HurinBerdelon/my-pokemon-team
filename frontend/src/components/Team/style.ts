import styled from "styled-components";

export const TeamContainer = styled.div`

    background: ${props => props.theme.colors.backgroundOne};
    margin: 2rem;
    border-radius: 0.25rem;
    border: 1px solid;
    
    h2 {
        text-align: center;
        color: ${props => props.theme.colors.textOne};
        font-size: 1.5rem;
    }

    .teamContent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-items: center;
        
        padding: 0.75rem 1rem;

        .pokemonContainer {
            background: ${props => props.theme.colors.backgroundTwo};
            border-radius: 0.5rem;
            position: relative;

            img {
                object-fit: cover;
                width: 100%;
            }

            h4 {
                text-align: center;
                color: ${props => props.theme.colors.textOne};
            }
        }
    }
`