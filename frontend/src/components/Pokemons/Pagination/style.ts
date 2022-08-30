import styled from "styled-components";

export const PaginationContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

    .amountOfTotal {
        color: ${props => props.theme.colors.textOne};
    }
    
    .buttonsContainer {
        display: flex;
        gap: 0.25rem;

        .threePoints{
            font-size: 1.25rem;
            letter-spacing: .15rem;
        }
    }


`