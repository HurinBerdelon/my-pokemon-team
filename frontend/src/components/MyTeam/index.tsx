import { MyTeamContainer } from "./style";
import { XCircle } from "phosphor-react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/router";

export function MyTeam(): JSX.Element {

    const { user } = useUser()
    const router = useRouter()

    if (!user) {
        router.push('/')
        return (<></>)
    }

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