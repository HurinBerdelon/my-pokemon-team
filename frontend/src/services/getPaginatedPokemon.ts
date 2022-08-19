import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { PokemonSchema } from "../schema/PokemonSchema"

interface GetPaginatedPokemonReturn {
    totalCount: number
    next: string | null
    pokemons: PokemonSchema[]
}

interface AxiosResponseParams {
    data: {
        count: number
        next: string
        results: {
            name: string
            url: string
        }[]
    }
}

export async function getPaginatedPokemon(
    page: number,
    limit: number,
): Promise<GetPaginatedPokemonReturn> {

    const url = 'https://pokeapi.co/api/v2/pokemon'

    // take only until the number 386, which is the last pokemon of 3rd generation
    if (page === 20) {
        limit = 386 % 20
    }

    const { data }: AxiosResponseParams = await axios.get(`${url}?offset=${(page - 1) * 20}&limit=${limit}`)

    const pokemons = []

    for (let i = 0; i < data.results.length; i++) {
        const { data: pokemon } = await axios.get(data.results[i].url)

        pokemons.push({
            id: pokemon.id.toLocaleString('en-US', {
                minimumIntegerDigits: 3,
                useGrouping: false
            }),
            name: pokemon.name,
            imageUrl: pokemon.sprites.other['official-artwork'].front_default,
            types: pokemon.types.map((type: any) => type.type.name),
        })
    }

    return {
        totalCount: data.count,
        next: data.next,
        pokemons
    }
}

export function usePokemons(page: number, limit = 20) {

    return useQuery(
        [`pokemons_page-${page}`],
        () => getPaginatedPokemon(page, limit),
        {
            staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
        }
    )
}