import { MyTeamContainer } from "./style";
import { XCircle } from "phosphor-react";
import { useTeam } from "../../hooks/useTeam";
import { PokemonSchema } from "../../schema/PokemonSchema";

export function MyTeam(): JSX.Element {

    const { removePokemonFromTeam } = useTeam()
    const { myTeam } = useTeam()

    return (
        <MyTeamContainer>
            <h2>My Team <span>{`${myTeam?.pokemons.length}/6`}</span></h2>

            <div className="teamContent">

                {myTeam?.pokemons.map((pokemon: PokemonSchema) => (
                    <div className="pokemonContainer" key={pokemon.id}>
                        <XCircle
                            className="closeButton"
                            tabIndex={0}
                            weight='fill'
                            onClick={() => removePokemonFromTeam(pokemon)}
                        />

                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <h4>{pokemon.name}</h4>
                    </div>
                ))}

            </div>
        </MyTeamContainer>
    )
}