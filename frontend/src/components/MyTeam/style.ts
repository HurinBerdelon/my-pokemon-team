import styled from "styled-components";

export const MyTeamContainer = styled.section`

    background: ${props => props.theme.colors.boxOne};
    margin: 0.5rem;
    border-radius: 0.25rem;
    min-height: 200px;
    height: fit-content;
    
    @media (min-width: 540px) {
        border-radius: 0.5rem;
        /* margin: 1rem; */
    }

    @media (min-width: 720px) {
        max-width: 35%;
        min-width: 35%;
        position: fixed;
        right: 0;
    }

    @media (min-width: 1032px) {
        max-width: 30%;
        min-width: 30%;
    }

    @media (min-width: 1115px) {
        max-width: 25%;
        min-width: 25%;
    }
    
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

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        
        
        .pokemonContainer {
            background: ${props => props.theme.colors.boxTwo};
            border-radius: 0.5rem;
            position: relative;
            padding: 0.5rem;

            .closeButton {
                position: absolute;
                top: -0.75rem;
                right: -0.75rem;
                font-size: 2rem;
                color: ${props => props.theme.colors.danger};

                &:hover {
                    cursor: pointer;
                    filter: brightness(1.2);
                }
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