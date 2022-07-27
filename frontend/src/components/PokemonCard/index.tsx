import { PokemonCardContainer } from "./style";

export function PokemonCard(): JSX.Element {

    return (
        <PokemonCardContainer>
            <div className="imgContainer">
                <img src="/pokemon/1.png" alt="Bulbasaur" />
            </div>
            <h6 className="pokemonNumber">Number: 001</h6>
            <h4 className="pokemonName">Bulbasaur</h4>
            <div className="types">
                <p className="type">Grass</p>
                <p className="type">Poison</p>
            </div>
        </PokemonCardContainer>
    )
}