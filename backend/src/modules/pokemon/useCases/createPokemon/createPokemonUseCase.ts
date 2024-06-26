import { Pokemon } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IPokemonRepository } from '../../repositories/IPokemonRepository';

@injectable()
export class CreatePokemonUseCase {
    constructor(
        @inject('PokemonsRepository')
        private pokemonsRepository: IPokemonRepository
    ) { }

    async execute(pokeId: string, name: string, imageUrl: string, types: string[]): Promise<Pokemon> {

        let pokemon = await this.pokemonsRepository.findByPokeId(pokeId)

        if (!pokemon) {
            pokemon = await this.pokemonsRepository.create(pokeId, name, imageUrl, types)
        }

        return pokemon
    }
}