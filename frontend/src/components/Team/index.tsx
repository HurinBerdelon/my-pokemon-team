import { PokemonCard } from "../PokemonCard";
import { TeamContainer } from "./style";

interface TeamProps {
    username: string
    team: any // TODO
}

export function Team(): JSX.Element {

    return (
        <TeamContainer>
            <h2>User's Team</h2>

            <div className="teamContent">
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
            </div>
        </TeamContainer>
    )
}