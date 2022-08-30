import { Pokemon } from "@prisma/client";

export interface IPokemonRepository {
    create(pokeId: string, name: string, imageUrl: string, types: string[]): Promise<Pokemon>
    findByPokeId(pokeId: string): Promise<Pokemon>
}