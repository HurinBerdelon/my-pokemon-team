import styled from "styled-components";

export const PopoverMenuContainer = styled.div`

    button {
        color: ${props => props.theme.colors.textTwo};
        display: flex;

        svg {
            font-size: 2rem;
        }
    }

    .popoverMenuContent{
        position: absolute;
        right: 0;
        background: ${props => props.theme.colors.backgroundTwo};
        color: ${props => props.theme.colors.textOne};

        padding: 0.5rem 1rem;
        
        .logout {
            margin-top: 1rem;
            border-top: 1px solid ${props => props.theme.colors.inputPlaceholder};

            display: flex;
            justify-content: center;
            
            .logoutButton {
                margin-top: 1rem;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                
                background: ${props => props.theme.colors.buttons};
                color: ${props => props.theme.colors.textThree};
            }
        }
    }
`