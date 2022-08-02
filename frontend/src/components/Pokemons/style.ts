import styled from "styled-components";

export const PokemonsContainer = styled.main`

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (min-width: 540px) {
        grid-template-columns: repeat(4, 1fr);
        margin: 0.5rem;
    }

    @media (min-width: 720px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (min-width: 1080px) {
    }
`