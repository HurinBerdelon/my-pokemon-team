import { useEffect, useState } from "react";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { usePokemons } from "../../services/getPaginatedPokemon";
import { PokemonCard } from "../PokemonCard";
import { Pagination } from "./Pagination";
import { PokemonsContainer } from "./style";

interface PokemonsProps {
    data: {
        totalCount: number
        next: string | null
        pokemons: PokemonSchema[]
    }
    showAddButton?: boolean
}

export function Pokemons({ data, showAddButton = false }: PokemonsProps): JSX.Element {

    const [page, setPage] = useState(1)
    const [pokemons, setPokemons] = useState(data.pokemons)

    const { data: pokemonList, isLoading, isFetching, error } = usePokemons(page)

    useEffect(() => {
        if (pokemonList) {
            setPokemons(pokemonList.pokemons)
        }
    }, [pokemonList])

    if (isLoading) {
        return (
            <PokemonsContainer>
                <div className="loading">
                    Loading...
                </div>
            </PokemonsContainer>
        )
    }

    return (
        <PokemonsContainer>
            <section className="pokemonGrid">
                {pokemons.map(pokemon => (
                    <div key={pokemon.id} className="pokemonContainer">
                        <PokemonCard
                            pokemon={pokemon}
                            showAddButton={showAddButton}
                            showNumber={true}
                            showTypes={true}
                        />
                    </div>
                ))}
            </section>

            <Pagination
                onPageChange={setPage}
                totalCountOfRegisters={386}
                currentPage={page}
            />

        </PokemonsContainer>
    )
}