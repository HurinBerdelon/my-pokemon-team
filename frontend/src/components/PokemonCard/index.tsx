import { PokemonCardContainer } from "./style";
import { PlusCircle } from "phosphor-react";
import light from "../../styles/themes/light";

export function PokemonCard(): JSX.Element {

    return (
        <PokemonCardContainer>
            <PlusCircle weight='fill' className='addButton' tabIndex={0} />
            <div className="imgContainer">
                <img src="/pokemon/1.png" alt="Bulbasaur" />
            </div>
            <h6 className="pokemonNumber">Number: 001</h6>
            <h4 className="pokemonName">Bulbasaur</h4>
            <div className="types">
                <p className="type" style={{ background: `${light.colors.types.grass}` }}>Grass</p>
                <p className="type" style={{ background: `${light.colors.types.poison}` }}>Poison</p>
            </div>
            {/* <button className='addButtonBottom'>
                Add
            </button> */}
        </PokemonCardContainer>
    )
}

// Missão pr'ocê quando acordá, vote aí