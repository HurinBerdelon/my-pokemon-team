import { PokemonCard } from "../PokemonCard";
import { PokemonsContainer } from "./style";

export function Pokemons(): JSX.Element {

    return (
        <PokemonsContainer>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </PokemonsContainer>
    )
}