import { PokemonSchema, TeamSchema } from "./PokemonSchema"

export interface UserSchema {
    id: string
    name: string
    providerId: string
    avatarURL: string
    team: TeamSchema

}