import { Router } from "express";
import { AddPokemonToTeamController } from "../modules/team/useCases/AddPokemonToTeam/AddPokemonToTeamController";
import { RemovePokemonFromTeamController } from "../modules/team/useCases/removePokemonFromTeam/removePokemonFromTeamController";

export const teamsRoutes = Router()

const addPokemonToTeamController = new AddPokemonToTeamController()
const removePokemonFromTeamController = new RemovePokemonFromTeamController()

teamsRoutes.post('/add', addPokemonToTeamController.handle)
teamsRoutes.delete('/remove', removePokemonFromTeamController.handle)