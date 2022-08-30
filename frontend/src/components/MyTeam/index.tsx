import { MyTeamContainer } from "./style";
import { PlusCircle, XCircle } from "phosphor-react";
import { useTeam } from "../../hooks/useTeam";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { toastSuccess } from "../../utils/toastProvider";

export function MyTeam(): JSX.Element {

    const { removePokemonFromTeam } = useTeam()
    const { myTeam } = useTeam()

    return (
        <MyTeamContainer>
            <h2>
                My Team
                <span>{`${myTeam?.pokemons.length}/6`}</span>
                <button onClick={() => toastSuccess('Team saved!')}>Save</button>
            </h2>

            {myTeam?.pokemons.length === 0 &&
                (
                    <p>
                        Here is your team, with your favorite pokemons. Click in the
                        <PlusCircle
                            className="addButtonIcon"
                            weight='fill'
                        />
                        button on the list of pokemons to recruite them to your team. Click in the
                        <XCircle
                            className="closeButtonIcon"
                            weight='fill'
                        />
                        button after adding to your team,
                        to remove them.
                    </p>
                )}

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