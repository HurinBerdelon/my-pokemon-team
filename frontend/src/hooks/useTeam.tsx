import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokemonSchema, TeamResponseSchema, TeamSchema } from "../schema/PokemonSchema";
import { api } from "../services/api";
import { toastError, toastSuccess, toastWarn } from "../utils/toastProvider";
import { useUser } from "./useUser";

interface TeamContextData {
    myTeam: TeamSchema | undefined
    teams: TeamSchema[] | undefined
    addPokemonToTeam: (pokemon: PokemonSchema) => void
    removePokemonFromTeam: (pokemon: PokemonSchema) => void
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

            setMyTeam({
                id: user.team.id,
                pokemons: user.team.pokemons.map(item => item.pokemon),
                userId: user.team.userId,
            })
        }
    }, [user])

    useEffect(() => {

        setTeams([])

        api.get('/team')
            .then(response => {
                response.data.map(async (team: TeamResponseSchema) => {
                    const response = await api.get(`/users/${team.userId}`)
                    setTeams(prevTeams =>
                        [
                            {
                                ...team,
                                pokemons: team.pokemons.map(item => item.pokemon),
                                userName: response.data.name,
                            },
                            ...prevTeams
                        ])

                })
            })
    }, [myTeam])

    async function addPokemonToTeam(pokemon: PokemonSchema) {
        try {
            const response = await api.post('/team/add', {
                pokeId: pokemon.id,
                name: pokemon.name,
                imageUrl: pokemon.imageUrl,
                types: pokemon.types,
                teamId: myTeam?.id
            })
            setMyTeam({
                id: response.data.id,
                pokemons: response.data.pokemons.map((item: { pokemon: PokemonSchema }) => item.pokemon),
                userId: response.data.userId,
            })
            toastSuccess(`${pokemon.name} was added to your team!`)
        } catch (error: any) {
            if (error.response.data?.message === "Cannot Add more pokemons to this team") {
                toastError("Cannot Add more pokemons to this team")
            } else if (error.response.data?.message === 'Pokemon already in this team') {
                toastWarn(`${pokemon.name} is already on your team`)
            } else {
                console.log(error)
            }
        }
    }

    async function removePokemonFromTeam(pokemon: PokemonSchema) {
        const response = await api.patch('/team/remove', {
            pokeId: pokemon.pokeID,
            teamId: myTeam?.id
        })

        setMyTeam({
            id: response.data.id,
            pokemons: response.data.pokemons.map((item: { pokemon: PokemonSchema }) => item.pokemon),
            userId: response.data.userId
        })
        toastSuccess(`${pokemon.name} was removed from your team!`)
    }

    return (
        <TeamContext.Provider value={{
            myTeam,
            teams,
            addPokemonToTeam,
            removePokemonFromTeam,
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export function useTeam() {
    return useContext(TeamContext)
}