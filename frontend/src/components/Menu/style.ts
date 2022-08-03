import styled from "styled-components";

export const MenuContainer = styled.nav`
    margin-top: 1rem;    
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    a {
        font-size: 1.25rem;
    }

    @media (min-width: 720px) {
        height: 100%;
        margin: 0;
        padding: 0 1rem;
        flex-direction: row;  
        gap: 1rem;
    }
`