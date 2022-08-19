export interface PokemonSchema {
    id: string
    name: string
    types: string[]
    imageUrl: string
}

export interface TeamSchema {
    id: string
    userId: string
    userName: string
    pokemons: PokemonSchema[]
}