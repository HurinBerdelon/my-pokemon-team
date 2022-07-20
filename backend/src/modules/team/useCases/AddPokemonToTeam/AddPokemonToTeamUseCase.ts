import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IPokemonRepository } from '../../../pokemon/repositories/IPokemonRepository';
import { CreatePokemonUseCase } from '../../../pokemon/useCases/createPokemon/createPokemonUseCase';
import { ITeamRepository, TeamResponse } from '../../repositories/ITeamRepository';

@injectable()
export class AddPokemonToTeamUseCase {
    constructor(
        @inject('TeamsRepository')
        private teamsRepository: ITeamRepository,
        @inject('PokemonsRepository')
        private pokemonsRepository: IPokemonRepository
    ) { }

    async execute(pokeId: string, teamId: string): Promise<TeamResponse> {

        const createPokemonUseCase = new CreatePokemonUseCase(this.pokemonsRepository)

        const pokemon = await createPokemonUseCase.execute(pokeId)

        const isPokemonOnTeam = await this.teamsRepository.checkForPokemonOnTeam(pokemon.id, teamId)

        if (isPokemonOnTeam) {
            throw new AppError('Pokemon already in this team')
        }

        const teamLenght = await this.teamsRepository.teamLenght(teamId)

        if (teamLenght === 6) {
            throw new AppError('Cannot Add more pokemons to this team')
        }

        const team = await this.teamsRepository.addToTeam(pokemon.id, teamId, pokeId)

        return team
    }
}