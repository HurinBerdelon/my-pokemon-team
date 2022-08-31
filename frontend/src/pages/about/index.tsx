import Head from "next/head";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { AboutContainer } from "./style";

export default function About(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>Teams | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <AboutContainer>

                    <main>

                        <h2>
                            Welcome to My Pokemon Team.
                        </h2>

                        <section className="presentation">
                            <h4>About the app</h4>
                            <p>
                                My Pokemon Team is an app developed to list pokemons of the first, second and third generations
                                (who knows if in future it will have more?) and allow users to authenticate using their Google
                                and Facebook accounts to create their teams, with their favorite pokemons and show it to another user.
                            </p>
                        </section>
                        <section className="history">
                            <h4>History</h4>
                            <p>
                                The project was born on an idea of two friend thinking about some FullStack project to develop and improve skills. As born players we choose to create a project related to a game of our childhoods.
                                With this a small documentation with the features to develop the app was written and this web app is my version for the app.
                            </p>

                        </section>
                        <section className="invite">
                            <p>
                                Do you want to see the documentation and/or take place in the challenge of develop your version of this app? Check the
                                <a
                                    target='_blank'
                                    href="https://www.linkedin.com/posts/fernando-henrique-p-cardozo_meu-time-pokemon-activity-6956323125886087168-ZENK/?utm_source=share&utm_medium=member_desktop"
                                >
                                    {` linkedIn `}
                                </a>
                                post of the challenge.
                            </p>
                        </section>

                        {/* TODO: Send feedbacks */}
                    </main>

                    <footer>
                        <p>Developed by Fernando Cardozo (HurinBerdelon)</p>
                        <ul className="mediaLinks">
                            <a target='_blank' href="https://github.com/HurinBerdelon/my-pokemon-team"><GithubLogo /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/fernando-henrique-p-cardozo/"><LinkedinLogo /> </a>
                        </ul>
                    </footer>
                </AboutContainer>

            </ThemeProvider>
        </>
    )
}