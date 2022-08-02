import styled from "styled-components";

export const UpdateProfileContainer = styled.section`

    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: ${props => props.theme.colors.textOne};
            padding: 1rem 0;
            font-size: 2rem;
        }

        .submitButton {
            margin-top: 1rem;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;

                font-size: 1.5rem;
                font-weight: 600;
                
                background: ${props => props.theme.colors.buttons};
                color: ${props => props.theme.colors.textThree};
        }

    }

`