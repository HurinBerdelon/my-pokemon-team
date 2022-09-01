import { MyTeamContainer } from "./style";
import { CircleNotch, PlusCircle, XCircle } from "phosphor-react";
import { useTeam } from "../../hooks/useTeam";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { toastSuccess } from "../../utils/toastProvider";

export function MyTeam(): JSX.Element {

    const { removePokemonFromTeam } = useTeam()
    const { myTeam, idLoading, setIdLoading, loadTeams } = useTeam()

    return (
        <MyTeamContainer>
            <h2>
                My Team
                <span>{`${myTeam?.pokemons.length}/6`}</span>
                <button
                    onClick={() => {
                        toastSuccess('Team saved!')
                        loadTeams()
                    }}
                >
                    Save
                </button>
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
                        {idLoading === pokemon.id
                            ? <CircleNotch
                                className='loader'
                                weight="fill"
                            />
                            : <XCircle
                                className="closeButton"
                                tabIndex={0}
                                weight='fill'
                                onClick={() => {
                                    setIdLoading(pokemon.id)
                                    removePokemonFromTeam(pokemon)
                                }}
                            />
                        }

                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <h4>{pokemon.name}</h4>
                    </div>
                ))}

            </div>
        </MyTeamContainer>
    )
}