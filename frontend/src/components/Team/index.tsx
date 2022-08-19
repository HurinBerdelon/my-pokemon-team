import { PokemonSchema } from "../../schema/PokemonSchema";
import { TeamContainer } from "./style";

interface TeamProps {
    username: string
    team: {
        id: string
        pokemons: PokemonSchema[]
    }
}

export function Team({ username, team }: TeamProps): JSX.Element {

    return (
        <TeamContainer>
            <h2>{`${username}'s Team`}</h2>

            <div className="teamContent">

                {team.pokemons.map(pokemon => (
                    <div className="pokemonContainer" key={pokemon.id}>
                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <h4>{pokemon.name}</h4>
                    </div>
                ))}
            </div>
        </TeamContainer>
    )
}