import { MyTeamContainer } from "./style";
import { XCircle } from "phosphor-react";

export function MyTeam(): JSX.Element {

    return (
        <MyTeamContainer>
            <h2>My Team</h2>

            <div className="teamContent">
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
                <div className="pokemonContainer">
                    <XCircle className="closeButton" tabIndex={0} weight='fill' />
                    <img src="pokemon/1.png" alt="Bulbasaur" />
                    <h4>Bulbasaur</h4>
                </div>
            </div>
        </MyTeamContainer>
    )
}