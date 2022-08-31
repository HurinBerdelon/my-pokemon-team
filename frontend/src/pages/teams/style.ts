import styled from "styled-components";

export default styled.main`

    @media (min-width: 540px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 720px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1080px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1520px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

`