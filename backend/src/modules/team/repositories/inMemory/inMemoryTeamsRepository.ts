import { PokemonOnTeams } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'
import { ITeamRepository, TeamResponse } from "../ITeamRepository";

export class InMemoryTeamsRepository implements ITeamRepository {

    teamsRepository: TeamResponse[] = []
    pokemonOnTeamsRepository: PokemonOnTeams[] = []

    async checkForPokemonOnTeam(pokemonId: string, teamId: string): Promise<boolean> {
        const pokemonOnTeam = this.pokemonOnTeamsRepository
            .filter(item => item.pokemonId === pokemonId && item.teamId === teamId)

        if (pokemonOnTeam.length === 0) {
            return false
        }

        return true
    }

    async teamLenght(teamId: string): Promise<number> {
        const pokemonOnTeam = this.pokemonOnTeamsRepository
            .filter(item => item.teamId === teamId)

        return pokemonOnTeam.length
    }

    async addToTeam(pokemonId: string, teamId: string, pokeId?: string /* pokeId for test purpose */): Promise<TeamResponse> {

        const pokemonOnTeam = {
            id: uuidv4(),
            pokemonId: pokemonId,
            teamId: teamId,
            pokemon: {
                id: pokemonId,
                pokeID: pokeId,
                name: 'sampleName',
                imageUrl: 'image_url',
                types: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        this.pokemonOnTeamsRepository.push(pokemonOnTeam)

        const team = this.teamsRepository.find(item => item.id === teamId)

        team.pokemons.push(pokemonOnTeam)

        return team
    }

    async getAllTeams(): Promise<TeamResponse[]> {
        return this.teamsRepository
    }

    async removeFromTeam(pokemonId: string, teamId: string): Promise<TeamResponse> {

        const team = this.teamsRepository.find(team => team.id === teamId)

        const pokemon = team.pokemons.find(relation => relation.pokemonId === pokemonId)
        const pokemonIndex = team.pokemons.indexOf(pokemon)
        team.pokemons.splice(pokemonIndex, 1)

        const teamIndex = this.teamsRepository.indexOf(team)
        this.teamsRepository.splice(teamIndex, 1, team)

        return team
    }


}