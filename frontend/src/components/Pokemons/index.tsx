import { useState } from "react";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { getPaginatedPokemon } from "../../services/getPaginatedPokemon";
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

    const [pokemons, setPokemons] = useState(data.pokemons)

    async function handleLoadMore() {
        if (data.next) {
            const { next, pokemons } = await getPaginatedPokemon(data.next)

            data.next = next
            setPokemons(prevPokemons => [...prevPokemons, ...pokemons])
        }
    }

    return (
        <PokemonsContainer>
            <section className="pokemonGrid">
                {pokemons.map(pokemon => (
                    <div key={pokemon.id} className="pokemonContainer">
                        <PokemonCard
                            pokemon={pokemon}
                            showAddButton={true}
                            showNumber={true}
                            showTypes={true}
                        />
                    </div>
                ))}
            </section>

            {data.next && <button className="loadMoreButton" onClick={handleLoadMore}>
                Load More
            </button>}

        </PokemonsContainer>
    )
}