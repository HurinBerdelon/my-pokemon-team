import { PokemonSchema } from "../../schema/PokemonSchema";
import { PokemonCard } from "../PokemonCard";
import { PokemonsContainer } from "./style";

interface PokemonsProps {
    data: {
        numberOfPages: number
        next: string | null
        pokemons: PokemonSchema[]
    }
}

export function Pokemons({ data }: PokemonsProps): JSX.Element {

    return (
        <PokemonsContainer>
            {data?.pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    showAddButton={true}
                    showNumber={true}
                    showTypes={true}
                />
            ))}

        </PokemonsContainer>
    )
}