import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0 1rem;
    flex-direction: row;  
    gap: 1rem;

    position: relative;

    a {
        font-size: 1.25rem;

        &.active {
            text-decoration: underline;
            text-underline-offset: 10px;
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
        gap: 0.25rem;
        margin-top: 1rem;

        a.active {
            text-underline-offset: 3px;
        }
    }
`