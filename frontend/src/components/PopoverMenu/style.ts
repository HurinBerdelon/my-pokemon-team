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
        z-index: 1;
        right: 0;
        background: ${props => props.theme.colors.backgroundTwo};
        color: ${props => props.theme.colors.textOne};

        padding: 1rem 1.5rem;
        
        .logout {
            margin-top: 1rem;
            border-top: 1px solid ${props => props.theme.colors.inputPlaceholder};

            display: flex;
            justify-content: center;
            
            .logoutButton {
                margin-top: 1rem;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;

                font-size: 0.85rem;
                
                background: ${props => props.theme.colors.buttons};
                color: ${props => props.theme.colors.textThree};
            }
        }
    }
`