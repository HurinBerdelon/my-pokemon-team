import { Router } from "express";
import { AddPokemonToTeamController } from "../modules/team/useCases/AddPokemonToTeam/AddPokemonToTeamController";
import { RemovePokemonFromTeamController } from "../modules/team/useCases/removePokemonFromTeam/removePokemonFromTeamController";
import { ensureAuthenticated } from "../middleware/ensuseAuthenticated";
import { GetAllTeamsController } from "../modules/team/useCases/getAllTeams/getAllTeamsController";

export const teamsRoutes = Router()

const addPokemonToTeamController = new AddPokemonToTeamController()
const removePokemonFromTeamController = new RemovePokemonFromTeamController()
const getAllTeamsController = new GetAllTeamsController()

teamsRoutes.get('/', getAllTeamsController.handle)
teamsRoutes.post('/add', ensureAuthenticated, addPokemonToTeamController.handle)
teamsRoutes.patch('/remove', ensureAuthenticated, removePokemonFromTeamController.handle)