import styled from "styled-components";

export const LoginModalContainer = styled.div`

    position: absolute;
    top: calc((100% - 400px)/2);
    left: calc((100% - 390px)/2);
    z-index: 1;
    background: ${props => props.theme.colors.backgroundOne};
    border-radius: 0.25rem;

    height: 400px;
    width: 390px;

    .dialogContent {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h2 {
            color: ${pprops => pprops.theme.colors.textOne};
        }

        p {
            color: ${pprops => pprops.theme.colors.textOne};
            max-width: 260px;
            margin-bottom: 2rem;
        }

        .authButton {
            width: 70%;
            background: ${props => props.theme.colors.buttons};
            color: ${props => props.theme.colors.textThree};
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;

            font-weight: 600;
            font-size: 1rem;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;

            svg {
                font-size: 1.5rem;
            }
        }
    }

    

`