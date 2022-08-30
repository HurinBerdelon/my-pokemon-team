import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    background: ${props => props.theme.colors.boxOne};
    color: ${props => props.theme.colors.textTwo};

    position: relative;

    .menuContainer {
        display: flex;
        align-items: center;

        .profileButton {

            .miniImgContainer {

                width: 50px;
                height: 50px;
                border: 2px solid ${props => props.theme.colors.buttons};
                border-radius: 50%;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    padding: 0.1rem;
                    border-radius: 50%;
                }
            }
        }

        .popoverMenuContent{
            position: absolute;
            z-index: 1;
            right: 0;
            background: ${props => props.theme.colors.backgroundTwo};
            color: ${props => props.theme.colors.textOne};

            padding: 1rem 1.5rem;
            
            .logout, .login {
                display: flex;
                justify-content: center;
                
                .logoutButton, .loginButton {
                    margin-top: 1rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;

                    font-size: 0.85rem;
                    
                    background: ${props => props.theme.colors.buttons};
                    color: ${props => props.theme.colors.textThree};
                }
            }

            @media (min-width: 1440px) {
                padding: 2rem;

                .login, .logout {

                    .logoutButton, .loginButton {
                        font-size: 1rem;
                    }
                }
            }
        }

        @media (max-width: 720px) {
            display: none;
        }
    }
`