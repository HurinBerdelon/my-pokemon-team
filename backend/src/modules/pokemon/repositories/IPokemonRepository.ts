import { Pokemon } from "@prisma/client";

export interface IPokemonRepository {
    create(pokeId: string): Promise<Pokemon>
    findByPokeId(pokeId: string): Promise<Pokemon>
}