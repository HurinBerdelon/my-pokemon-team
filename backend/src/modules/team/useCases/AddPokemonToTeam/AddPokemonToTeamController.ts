import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddPokemonToTeamUseCase } from "./AddPokemonToTeamUseCase";

export class AddPokemonToTeamController {

    async handle(request: Request, response: Response): Promise<Response> {

        const {
            pokeId,
            name,
            imageUrl,
            types,
            teamId
        } = request.body

        const addPokemonToTeamUseCase = container.resolve(AddPokemonToTeamUseCase)

        const result = await addPokemonToTeamUseCase.execute(
            pokeId,
            name,
            imageUrl,
            types,
            teamId
        )

        return response.json(result)
    }
}