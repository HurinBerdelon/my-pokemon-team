import styled from "styled-components";

export const ProfileContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .imgContainer {
        width: 85px;
        height: 85px;
        border: 2px solid ${props => props.theme.colors.buttons};
        border-radius: 50%;

        @media (min-width: 1440px) {
            width: 120px;
            height: 120px;
        }

        img {
            padding: 0.15rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .profileName {
        font-size: 1.25rem;
        max-width: 200px;
        text-align: center;

        @media (min-width: 1440px) {
            max-width: 250px;
            font-size: 1.5rem;
        }
    }

    .profileUpdateButton {
        background: ${props => props.theme.colors.buttons};
        color: ${props => props.theme.colors.textThree};
        
        padding: 0.25rem 0.75rem;
        font-size: 0.85rem;
        border-radius: 1rem;

        @media (min-width: 1440px)  {
            margin-top: 0.5rem;
            font-size: 1rem;
        }
    }

    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.inputPlaceholder};
`