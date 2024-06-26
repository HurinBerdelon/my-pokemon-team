import styled from "styled-components";

export const AboutContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    main {
        flex: 1;
        padding: 1rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            color: ${props => props.theme.colors.textOne}
        }

        @media (min-width: 720px) {
            max-width: 800px;
            margin: 0 auto;
        }

        .presentation, .history, .invite {

            padding-bottom: 0.5rem;

            h4, p {
                color: ${props => props.theme.colors.textOne}
            }

            h4 {
                padding: 1rem 0;
            }

            p {
                text-align: justify;

                a {
                    color: ${props => props.theme.colors.buttons}
                }
            }
        }
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;

        background: ${props => props.theme.colors.boxTwo};
        color: ${props => props.theme.colors.textTwo};

        .mediaLinks {
            display: flex;
            gap: 0.5rem;

            svg {
                font-size: 1.5rem;
            }
        }
    }
`