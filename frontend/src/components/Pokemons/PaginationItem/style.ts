import styled from "styled-components";

export const PaginationItemContainer = styled.div`

    button {   

        background: ${props => props.theme.colors.gray};
        color: ${props => props.theme.colors.textThree};
        
        padding: 0.5rem;
        border-radius: 0.4rem;

        font-weight: 600;

        &:disabled {
            background: ${props => props.theme.colors.buttons};
            cursor: default;
        }
    }


`