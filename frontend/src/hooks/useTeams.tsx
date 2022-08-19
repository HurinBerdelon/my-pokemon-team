import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TeamSchema } from "../schema/PokemonSchema";
import { api } from "../services/api";
import { useUser } from "./useUser";

interface TeamContextData {
    myTeam: TeamSchema | undefined
    teams: TeamSchema[] | undefined
    getTeams: () => void
}

interface TeamProviderProps {
    children: ReactNode
}

const TeamContext = createContext<TeamContextData>({} as TeamContextData)

export function TeamProvider({ children }: TeamProviderProps): JSX.Element {

    const { user } = useUser()
    const [myTeam, setMyTeam] = useState<TeamSchema>()
    const [teams, setTeams] = useState<TeamSchema[]>([])

    useEffect(() => {
        if (user) {
            setMyTeam(user.team)
        }
        getTeams()
    }, [user])

    async function getTeams() {
        api.get('/team')
            .then(response => {
                response.data.map(async (team: TeamSchema) => {
                    const response = await api.get(`/users/${team.userId}`)
                    if (teams) {
                        setTeams(prevTeams =>
                            [
                                {
                                    ...team,
                                    userName: response.data.name
                                },
                                ...prevTeams
                            ])
                    }
                })
            })
    }

    return (
        <TeamContext.Provider value={{ myTeam, teams, getTeams }}>
            {children}
        </TeamContext.Provider>
    )
}

export function useTeam() {
    return useContext(TeamContext)
}