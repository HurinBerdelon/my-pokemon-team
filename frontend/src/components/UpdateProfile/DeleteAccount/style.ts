import styled from "styled-components";

export const DeleteAccountContainer = styled.div`

    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    padding: 2rem 1rem;
    position: relative;

    @media (min-width: 720px) {
        margin-right: 2rem;
    }

    .deleteButton {
        color: ${props => props.theme.colors.danger};
        font-size: 1.25rem;

        &:hover {
            filter: brightness(1.2);
        }
    }

    .confirmDeletion {
        position: absolute;
        z-index: 1;
        background: ${props => props.theme.colors.backgroundTwo};
        width: 300px;
        right: 2rem;
        border-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${props => props.theme.colors.textOne};
        padding: 1rem;

        h4 {
            text-align: center;
            font-size: 1.25rem;
        }

        .buttons{
            margin-top: 2rem;
            display: flex;
            gap: 2rem;

            .confirm, .cancel {
                color: ${props => props.theme.colors.textThree};
                padding: 0.25rem 0.5rem;
                font-size: 1.125rem;
                border-radius: 0.25rem;
            }

            .confirm {
                background: ${props => props.theme.colors.buttons};
            }

            .cancel {
                background: ${props => props.theme.colors.danger};
                font-weight: 700;
            }
        }
    }
`