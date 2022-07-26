import styled from "styled-components";

export const PopoverMenuContainer = styled.div`

    button {
        svg {
            font-size: 2rem;
        }
    }

    .popoverMenuContent{
        position: absolute;
        right: 0;
        background: #ff0;

        padding: 0.5rem 1rem;
        
        .logout {
            margin-top: 1rem;
            border-top: 1px solid;

            text-align: center;
            
            .logoutButton {
                background: #0ff;
                padding: 0.25rem 0.75rem;
                border-radius: 0.25rem;
            }
        }
    }
`