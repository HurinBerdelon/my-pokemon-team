import styled from "styled-components";

export const MenuContainer = styled.nav`
    margin-top: 1rem;    
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    position: relative;

    a {
        font-size: 1.25rem;

        &.active {
            text-decoration: underline;
            text-underline-offset: 10px;
        }
    }

    @media (min-width: 720px) {
        height: 100%;
        margin: 0;
        padding: 0 1rem;
        flex-direction: row;  
        gap: 1rem;
    }
`