import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ErrorMessages } from '../../../../errors/ErrorMessages';
import { IPokemonRepository } from '../../../pokemon/repositories/IPokemonRepository';
import { ITeamRepository, TeamResponse } from '../../repositories/ITeamRepository';

@injectable()
export class RemovePokemonFromTeamUseCase {
    constructor(
        @inject('TeamsRepository')
        private teamsRepository: ITeamRepository,
        @inject('PokemonsRepository')
        private pokemonsRepository: IPokemonRepository
    ) { }

    async execute(teamId: string, pokeId: string): Promise<TeamResponse> {

        const pokemon = await this.pokemonsRepository.findByPokeId(pokeId)

        if (!pokemon) {
            throw new AppError(ErrorMessages.pokemonNotFound, 404)
        }

        const isPokemonOnTeam = await this.teamsRepository.checkForPokemonOnTeam(pokemon.id, teamId)

        if (!isPokemonOnTeam) {
            throw new AppError(ErrorMessages.pokemonNotOnTeam)
        }

        const team = await this.teamsRepository.removeFromTeam(pokemon.id, teamId)

        return team
    }
}