import styled from "styled-components";

export default styled.main`

    @media (min-width: 720px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
    }

    @media (min-width: 1080px) {
        justify-content: flex-end;
    }

    .pokemons {
        @media (min-width: 720px) {
            max-width: 63%;
        }

        @media (min-width: 1032px) {
            max-width: 68%;
        }

        @media (min-width: 1115px) {
            max-width: 73%;
        }
    }
`