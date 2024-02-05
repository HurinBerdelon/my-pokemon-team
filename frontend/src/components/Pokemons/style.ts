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
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        @media (min-width: 1560px) {
            .pokemonContainer {
                width: 250px;
            }
        }
    }    
`