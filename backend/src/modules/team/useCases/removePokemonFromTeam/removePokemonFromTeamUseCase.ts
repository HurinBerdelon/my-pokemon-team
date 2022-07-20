import { inject, injectable } from 'tsyringe';
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

        const team = await this.teamsRepository.removeFromTeam(pokemon.id, teamId)

        return team
    }
}