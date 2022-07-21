import { Pokemon } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { IPokemonRepository } from "../IPokemonRepository";

export class PrismaPokemonRepository implements IPokemonRepository {

    private pokemonsRepository = prisma.pokemon

    async create(pokeId: string): Promise<Pokemon> {
        const pokemon = await this.pokemonsRepository.create({
            data: {
                pokeID: pokeId
            }
        })

        return pokemon
    }

    async findByPokeId(pokeId: string): Promise<Pokemon> {
        const pokemon = await this.pokemonsRepository.findUnique({
            where: {
                pokeID: pokeId
            }
        })

        return pokemon
    }
}