import styled from "styled-components";

export const PokemonCardContainer = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: calc(100%/3 - 0.5rem);
    margin: 0.25rem;
    padding: 0.25rem;

    border: 1px solid;

    .imgContainer {
        width: 100px;
        height: 100px;

        img {
            object-fit: cover;
            width: 100%;
        }
    }

    .pokemonNumber {
        font-size: 0.65rem;
        font-weight: 600;
    }

    .types {
        display: flex;
        width: 100%;
        justify-content: space-evenly;

        .type {
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};
            
            padding: 0.1rem 0.25rem;
        }
    }
`