import styled from "styled-components";

export const MyTeamContainer = styled.section`

    background: ${props => props.theme.colors.boxTwo};
    margin: 0.5rem;
    border-radius: 0.25rem;
    
    h2 {
        text-align: center;
        color: ${props => props.theme.colors.textTwo};
        font-size: 1.25rem;
    }

    .teamContent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-items: center;
        
        padding: 0.75rem 1rem;
        
        
        .pokemonContainer {
            background: ${props => props.theme.colors.boxOne};
            border-radius: 0.5rem;
            position: relative;

            .closeButton {
                position: absolute;
                top: -0.75rem;
                right: -0.75rem;
                font-size: 2rem;
                color: ${props => props.theme.colors.danger};
            }

            img {
                object-fit: cover;
                width: 100%;
            }

            h4 {
                text-align: center;
                color: ${props => props.theme.colors.textTwo};
            }
        }
    }

`