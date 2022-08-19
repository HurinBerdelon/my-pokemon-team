import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TeamSchema } from "../schema/PokemonSchema";
import { api } from "../services/api";
import { useUser } from "./useUser";

interface TeamContextData {
    myTeam: TeamSchema | undefined
    teams: TeamSchema[] | undefined
}

interface TeamProviderProps {
    children: ReactNode
}

const TeamContext = createContext<TeamContextData>({} as TeamContextData)

export function TeamProvider({ children }: TeamProviderProps): JSX.Element {

    const { user } = useUser()
    const [myTeam, setMyTeam] = useState<TeamSchema>()
    const [teams, setTeams] = useState<TeamSchema[]>()

    useEffect(() => {
        if (user?.team) {
            setMyTeam(user.team)
        }
    }, [user])

    async function getTeams() {
        const response = await api.get('/team')
        console.log(response.data)
    }

    return (
        <TeamContext.Provider value={{ myTeam, teams }}>
            {children}
        </TeamContext.Provider>
    )
}

export function useTeam() {
    return useContext(TeamContext)
}