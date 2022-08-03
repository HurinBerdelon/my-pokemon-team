import styled from "styled-components";

export const FilterInputContainer = styled.section`

    margin: 0.5rem;
    border: 1px solid ;
    border-radius: 0.25rem;

    @media (min-width: 540px) {
        margin: 1rem;
    }

    @media (min-width: 720px) {
        max-width: 61%;
    }

    @media (min-width: 1032px) {
        max-width: 66%;
    }

    @media (min-width: 1115px) {
        max-width: 71%;
    }

    display: flex;
    align-items: center;
    position: relative;

    .filterButton {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;

        svg {
            font-size: 1rem;
        }
    }

    .filterOptions {    
        position: absolute;
        z-index: 1;
        top: 2.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;

        background: ${props => props.theme.colors.boxOne};
        color: ${props => props.theme.colors.textTwo};

        .option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    #searchBar {
        border: none;
        background: none;
        outline: none;
        flex: 1;
        padding: 0 0.5rem;
        border-left: 1px solid ${props => props.theme.colors.inputPlaceholder};
        border-right: 1px solid ${props => props.theme.colors.inputPlaceholder};

        color: ${props => props.theme.colors.textOne}
    }

    .filterIcon {
        font-size: 1.5rem;
        margin: 0.25rem 0.5rem;
    }

`