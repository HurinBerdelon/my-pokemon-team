import { PokemonCardContainer } from "./style";
import { PlusCircle, XCircle } from "phosphor-react";
import light from "../../styles/themes/light";

interface PokemonCardProps {
    showAddButton?: boolean
    showRemoveButton?: boolean
    showNumber?: boolean
    showTypes?: boolean
}

export function PokemonCard({
    showAddButton = false,
    showRemoveButton = false,
    showNumber = false,
    showTypes = false

}: PokemonCardProps): JSX.Element {

    return (
        <PokemonCardContainer>
            <div className="imgContainer">
                <img src="/pokemon/1.png" alt="Bulbasaur" />
            </div>

            {showNumber && <h6 className="pokemonNumber">Number: 001</h6>}

            <h4 className="pokemonName">Bulbasaur</h4>

            {showTypes && <div className="types">
                <p className="type" style={{ background: `${light.colors.types.grass}` }}>Grass</p>
                <p className="type" style={{ background: `${light.colors.types.poison}` }}>Poison</p>
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