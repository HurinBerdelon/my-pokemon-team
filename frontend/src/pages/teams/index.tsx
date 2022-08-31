import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Team } from "../../components/Team";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { useTeam } from "../../hooks/useTeam";
import { TeamsPageContainer } from "./style";

export default function Teams(): JSX.Element {

    const { currentTheme } = useCurrentTheme()
    const { teams } = useTeam()

    return (
        <>
            <Head>
                <title>Teams | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <TeamsPageContainer>
                    <>
                        {teams
                            ? teams.map(team => (
                                <Team
                                    key={team.id}
                                    team={team}
                                />
                            ))
                            : (
                                <div className="noTeamYet">
                                    <p>There is no team yet.</p>
                                </div>
                            )
                        }
                        <ScrollToTop />
                    </>
                </TeamsPageContainer>
            </ThemeProvider>
        </>
    )
}