import styled from "styled-components";

export const UpdateProfileContainer = styled.section`

    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 720px) {
            align-self: center;
            flex-direction: row;
            gap: 3rem;

            .outsideDrop {
                display: flex;
                flex-direction: column;
                gap: 6rem;
            }
        }

        h2 {
            color: ${props => props.theme.colors.textOne};
            padding: 1rem 0;
            font-size: 2rem;
        }

        .outsideDrop {
            display: flex;
            flex-direction: column;        
        }

        .submitButton {
            margin-top: 1rem;
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            
            width: fit-content;
            align-self: center;

            font-size: 1.5rem;
            font-weight: 600;
                
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};

            &:hover {
                filter: brightness(1.2)
            }

            svg {
                animation: spin 2s ease infinite;
                font-size: 2rem;
                
                @keyframes spin {
                    0% {transform: rotate(0deg)}
                    100% {transform: rotate(360deg)}
                }
            }
        }

    }

`