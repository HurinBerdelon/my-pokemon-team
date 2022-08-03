import { PokemonCardContainer } from "./style";
import { PlusCircle, XCircle } from "phosphor-react";
import light from "../../styles/themes/light";
import { PokemonSchema } from "../../schema/PokemonSchema";

interface PokemonCardProps {
    pokemon: PokemonSchema
    showAddButton?: boolean
    showRemoveButton?: boolean
    showNumber?: boolean
    showTypes?: boolean
}

export function PokemonCard({
    pokemon,
    showAddButton = false,
    showRemoveButton = false,
    showNumber = false,
    showTypes = false

}: PokemonCardProps): JSX.Element {

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

            {showAddButton && <PlusCircle weight='fill' className='addButton' tabIndex={0} />}
            {showRemoveButton && <XCircle className="closeButton" tabIndex={0} weight='fill' />}
            {/* <button className='addButtonBottom'>
                Add
            </button> */}
        </PokemonCardContainer>
    )
}

// Missão pr'ocê quando acordá, vote aí