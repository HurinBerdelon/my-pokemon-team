import { PokemonCardContainer } from "./style";
import { CircleNotch, PlusCircle } from "phosphor-react";
import light from "../../styles/themes/light";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { useTeam } from "../../hooks/useTeam";
import { capitalize } from "../../utils/capitalize";

interface PokemonCardProps {
    pokemon: PokemonSchema
    showAddButton?: boolean
    showNumber?: boolean
    showTypes?: boolean
}

export function PokemonCard({
    pokemon,
    showAddButton = false,
    showNumber = false,
    showTypes = false

}: PokemonCardProps): JSX.Element {

    const { addPokemonToTeam, isLoading, setIsLoading } = useTeam()

    return (
        <PokemonCardContainer>
            <div className="imgContainer">
                <img src={pokemon.imageUrl} alt={pokemon.name} />
            </div>

            {showNumber && <h6 className="pokemonNumber">Number: {pokemon.id}</h6>}

            <h4 className="pokemonName">{pokemon.name}</h4>

            {showTypes && <div className="types">
                {pokemon.types.map(type => (
                    <p key={type} className="type" style={{
                        background: `${light.colors.types[type as keyof typeof light.colors.types]}`
                    }}>{type}</p>
                ))}
            </div>}

            {showAddButton
                && (
                    isLoading
                        ? <CircleNotch
                            className='loader'
                            weight="fill"
                        />
                        : <PlusCircle
                            weight='fill'
                            className='addButton'
                            tabIndex={0}
                            onClick={() => {
                                setIsLoading(true)
                                addPokemonToTeam(pokemon)
                            }}
                        />
                )
            }
        </PokemonCardContainer>
    )
}

// Missão pr'ocê quando acordá, vote aí