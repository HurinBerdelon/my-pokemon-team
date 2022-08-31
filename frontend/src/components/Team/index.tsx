import Image from "next/image";
import { TeamSchema } from "../../schema/PokemonSchema";
import { TeamContainer } from "./style";

interface TeamProps {
    team: TeamSchema
}

export function Team({ team }: TeamProps): JSX.Element {

    if (team.pokemons.length === 0) {
        return <></>
    }

    return (
        <TeamContainer>
            <h2>{`${team.userName}'s Team`}</h2>

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