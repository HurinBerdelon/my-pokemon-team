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
        margin-top: 0.45rem;
        display: flex;
        justify-content: space-evenly;
        color: ${props => props.theme.colors.textTwo};
        font-size: 1.25rem;

        button {
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};
            font-weight: 600;
            padding: 0.25rem 1rem;
            border-radius: 0.25rem;

            &:hover {
                filter: brightness(1.2)
            }
        }
    }

    p {
        padding: 0.5rem 1rem;
        text-align: justify;
        color: ${props => props.theme.colors.textTwo};

        .closeButtonIcon, .addButtonIcon {
            margin: 0 0.25rem;
            font-size: 1.25rem;
        }

        .addButtonIcon {
            color: ${props => props.theme.colors.green}
        }

        .closeButtonIcon {
            color: ${props => props.theme.colors.danger};
        }
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

            .loader {      
                animation: spin 2s ease infinite;
                
                @keyframes spin {
                    0% {transform: rotate(0deg)}
                    100% {transform: rotate(360deg)}
                }
            }

            .closeButton, .loader {
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
                text-transform: capitalize;
                color: ${props => props.theme.colors.textTwo};
            }
        }
    }

`