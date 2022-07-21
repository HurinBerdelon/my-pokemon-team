import { Router } from "express";
import { AddPokemonToTeamController } from "../modules/team/useCases/AddPokemonToTeam/AddPokemonToTeamController";
import { RemovePokemonFromTeamController } from "../modules/team/useCases/removePokemonFromTeam/removePokemonFromTeamController";
import { ensureAuthenticated } from "../middleware/ensuseAuthenticated";

export const teamsRoutes = Router()

const addPokemonToTeamController = new AddPokemonToTeamController()
const removePokemonFromTeamController = new RemovePokemonFromTeamController()

teamsRoutes.post('/add', ensureAuthenticated, addPokemonToTeamController.handle)
teamsRoutes.delete('/remove', ensureAuthenticated, removePokemonFromTeamController.handle)