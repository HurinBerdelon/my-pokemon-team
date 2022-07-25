import { Team } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { ITeamRepository, TeamResponse } from "../ITeamRepository";

export class PrismaTeamRepository implements ITeamRepository {

    private teamsRepository = prisma.team
    private pokemonOnTeamsRepository = prisma.pokemonOnTeams

    // Returns true if the pokemon is on team, false otherwise
    async checkForPokemonOnTeam(pokemonId: string, teamId: string): Promise<boolean> {
        const pokemonOnTeam = await this.pokemonOnTeamsRepository.findMany({
            where: {
                pokemonId,
                teamId,
            }
        })

        if (pokemonOnTeam.length === 0) {
            return false
        }

        return true
    }

    async teamLenght(teamId: string): Promise<number> {
        const pokemonOnTeam = await this.pokemonOnTeamsRepository.findMany({
            where: {
                teamId,
            }
        })

        return pokemonOnTeam.length
    }

    async addToTeam(pokemonId: string, teamId: string, pokeId = "" /* pokeId for test purpose */): Promise<TeamResponse> {

        await this.pokemonOnTeamsRepository.create({
            data: {
                pokemonId,
                teamId
            }
        })

        const team = await this.teamsRepository.findUnique({
            where: {
                id: teamId
            },
            include: {
                pokemons: {
                    include: {
                        pokemon: true
                    }
                }
            }
        })

        return team
    }

    async getAllTeams(): Promise<TeamResponse[]> {
        const teams = await this.teamsRepository.findMany({
            include: {
                pokemons: {
                    include: {
                        pokemon: true
                    }
                }
            }
        })

        return teams
    }

    async removeFromTeam(pokemonId: string, teamId: string): Promise<TeamResponse> {
        const pokemonOnTeam = await this.pokemonOnTeamsRepository.findMany({
            where: {
                pokemonId,
                teamId
            }
        })

        await this.pokemonOnTeamsRepository.delete({
            where: {
                id: pokemonOnTeam[0].id
            }
        })

        const team = await this.teamsRepository.findUnique({
            where: { id: teamId },
            include: {
                pokemons: {
                    include: {
                        pokemon: true
                    }
                }
            }
        })

        return team
    }
}