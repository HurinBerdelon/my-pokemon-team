import { Router } from "express";
import { AddPokemonToTeamController } from "../modules/team/useCases/AddPokemonToTeam/AddPokemonToTeamController";

export const teamsRoutes = Router()

const addPokemonToTeamController = new AddPokemonToTeamController()

teamsRoutes.post('/add', addPokemonToTeamController.handle)

