import { PokemonCard } from "../PokemonCard";
import { PokemonsContainer } from "./style";

export function Pokemons(): JSX.Element {

    return (
        <PokemonsContainer>
            <PokemonCard showAddButton={true} showNumber={true} showTypes={true} />
            <PokemonCard showAddButton={true} showNumber={true} showTypes={true} />
            <PokemonCard showAddButton={true} showNumber={true} showTypes={true} />
            <PokemonCard showAddButton={true} showNumber={true} showTypes={true} />
            <PokemonCard showAddButton={true} showNumber={true} showTypes={true} />
        </PokemonsContainer>
    )
}