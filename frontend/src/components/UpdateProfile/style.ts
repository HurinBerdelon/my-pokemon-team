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
        }

        .submitButton {
            margin-top: 1rem;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;

                font-size: 1.25rem;
                font-weight: 600;
                
                background: ${props => props.theme.colors.buttons};
                color: ${props => props.theme.colors.textThree};
        }

    }

`