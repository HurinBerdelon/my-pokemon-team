import styled from "styled-components";

export const PokemonCardContainer = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0.5rem;
    padding: 0.5rem;

    position: relative;

    background: ${props => props.theme.colors.backgroundTwo};
    border-radius: 0.15rem;

    .addButton {
        position: absolute;
        top: -.75rem;
        right: -.75rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.green};
    }

    .closeButton {
        position: absolute;
        top: -0.75rem;
        right: -0.75rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.danger};
    }

    /* .addButtonBottom {
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.1rem 0.25rem;

        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.textTwo};
        border-radius: 2rem;

        font-weight: 600;
    } */

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
        justify-content: space-between;

        .type {
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};
            
            padding: 0.1rem 0.25rem;
            border-radius: 0.25rem;
            font-size: .9rem;
        }
    }
`