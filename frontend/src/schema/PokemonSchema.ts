export interface PokemonSchema {
    id: string
    pokeID: string
    name: string
    types: string[]
    imageUrl: string
}

export interface TeamResponseSchema {
    id: string
    userId: string
    pokemons: {
        pokemon: PokemonSchema
    }[]
}

export interface TeamSchema {
    id: string
    userId: string
    userName?: string
    pokemons: PokemonSchema[]
}