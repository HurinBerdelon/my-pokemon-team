import { PokemonSchema, TeamSchema } from "./PokemonSchema"

export interface UserResponseProps {
    id: string
    name: string
    providerId: string
    avatarURL: string
    team: {
        id: string
        userId: string
        pokemons: {
            pokemon: PokemonSchema
        }[]
    }
}
export interface UserSchema {
    id: string
    name: string
    providerId: string
    avatarURL: string
    team: TeamSchema
}