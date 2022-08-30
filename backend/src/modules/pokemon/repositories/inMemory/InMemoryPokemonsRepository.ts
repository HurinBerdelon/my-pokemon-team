import { Pokemon } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'
import { IPokemonRepository } from "../IPokemonRepository";

export class InMemoryPokemonsRepository implements IPokemonRepository {

    pokemonsRepository: Pokemon[] = []

    async create(pokeId: string, name: string, imageUrl: string, types: string[]): Promise<Pokemon> {
        const pokemon: Pokemon = {
            id: uuidv4(),
            pokeID: pokeId,
            name,
            imageUrl,
            types,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.pokemonsRepository.push(pokemon)

        return pokemon
    }

    async findByPokeId(pokeId: string): Promise<Pokemon> {
        const pokemon = this.pokemonsRepository.find(pokemon => pokemon.pokeID === pokeId)

        return pokemon
    }
}