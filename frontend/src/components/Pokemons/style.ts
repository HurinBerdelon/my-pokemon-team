import styled from "styled-components";

export const PokemonsContainer = styled.main`

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .loading {
        margin-top: 2rem;
        text-align: center;
        font-size: 1.25rem;
    }

    .pokemonGrid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        .pokemonContainer {
            max-width: calc(100% - 0.25rem);
        }
        
        @media (min-width: 540px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 0.5rem;
        }
        
        @media (min-width: 720px) {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }    

    .loadMoreButton{
        align-self: center;
        padding: 0.5rem 1rem;

        background: ${props => props.theme.colors.buttons};
        color: ${props => props.theme.colors.textThree};        
        border-radius: 0.5rem;

        font-weight: 600;
        font-size: 1rem;
    }
`