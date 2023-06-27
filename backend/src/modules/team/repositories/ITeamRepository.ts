import { Pokemon, PokemonOnTeams, Team } from "@prisma/client";

export type TeamResponse = Team & {
    pokemons: (PokemonOnTeams & {
        pokemon: Pokemon;
    })[]
}

export interface ITeamRepository {
    checkForPokemonOnTeam(pokemonId: string, teamId: string): Promise<boolean>
    teamLenght(teamId: string): Promise<number>
    addToTeam(pokemonId: string, teamId: string, pokeId?: string /* pokeId for test purpose */): Promise<TeamResponse>
    getAllTeams(): Promise<TeamResponse[]>
    removeFromTeam(pokemonId: string, teamId: string): Promise<TeamResponse>
}