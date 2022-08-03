import axios from "axios"
import { PokemonSchema } from "../schema/PokemonSchema"

interface GetPaginatedPokemonReturn {
    numberOfPages: number
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
    url = 'https://pokeapi.co/api/v2/pokemon',
    limit = 20,
): Promise<GetPaginatedPokemonReturn> {

    const { data }: AxiosResponseParams = await axios.get(`${url}?limit=${limit}`)

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
        numberOfPages: Math.ceil(data.count / limit),
        next: data.next,
        pokemons
    }
}