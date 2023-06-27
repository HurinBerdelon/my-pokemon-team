import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemovePokemonFromTeamUseCase } from './removePokemonFromTeamUseCase'

export class RemovePokemonFromTeamController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { teamId, pokeId } = request.body

        const removePokemonFromTeamUseCase = container.resolve(RemovePokemonFromTeamUseCase)

        const result = await removePokemonFromTeamUseCase.execute(teamId, pokeId)

        return response.json(result)
    }
}