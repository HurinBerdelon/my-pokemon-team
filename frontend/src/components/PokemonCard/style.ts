import styled from "styled-components";

export const PokemonCardContainer = styled.div`

    /* flex: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0.5rem;
    padding: 0.5rem;

    position: relative;

    background: ${props => props.theme.colors.backgroundTwo};
    border-radius: 0.15rem;

    .pokemonName {
        text-transform: capitalize;

        @media (min-width: 1080px) {
            font-size: 1.35rem;
        }
    }

    .loader {      
        animation: spin 2s ease infinite;
        
        @keyframes spin {
            0% {transform: rotate(0deg)}
            100% {transform: rotate(360deg)}
        }
    }

    .addButton, .loader {
        position: absolute;
        top: -.75rem;
        right: -.75rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.green};

        &:hover {
            cursor: pointer;
            filter: brightness(1.2);
        }
    }

    .closeButton {
        position: absolute;
        top: -0.75rem;
        right: -0.75rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.danger};
    }

    .imgContainer {
        width: 100px;
        height: 100px;

        @media (min-width: 1080px) {
            width: 150px;
            height: 150px;
        }

        @media (min-width: 1560px) {
            width: 162px;
            height: 162px;
        }

        img {
            object-fit: cover;
            width: 100%;
        }
    }

    .pokemonNumber {
        font-size: 0.65rem;
        font-weight: 600;
        
        @media (min-width: 1080px) {
            font-size: 1rem;
        }
    }

    .types {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .type {
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};
            
            padding: 0.1rem 0.25rem;
            border-radius: 0.25rem;
            font-size: .9rem;
            text-transform: capitalize;

            @media (min-width: 1080px) {
                font-size: 1.125rem;
            }
        }
    }
`