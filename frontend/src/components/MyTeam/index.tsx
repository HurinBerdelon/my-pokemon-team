import { MyTeamContainer } from "./style";
import { XCircle } from "phosphor-react";
import { UserSchema } from "../../schema/UserSchema";

interface MyTeamProps {
    user: UserSchema
}

export function MyTeam({ user }: MyTeamProps): JSX.Element {

    async function handleRemovePokemon(id: string): Promise<void> {
        console.log(id)
    }

    return (
        <MyTeamContainer>
            <h2>My Team</h2>

            <div className="teamContent">

                {user.team.pokemons.map(pokemon => (
                    <div className="pokemonContainer" key={pokemon.id}>
                        <XCircle
                            className="closeButton"
                            tabIndex={0}
                            weight='fill'
                            onClick={() => handleRemovePokemon(pokemon.id)}
                        />

                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <h4>{pokemon.name}</h4>
                    </div>
                ))}

            </div>
        </MyTeamContainer>
    )
}