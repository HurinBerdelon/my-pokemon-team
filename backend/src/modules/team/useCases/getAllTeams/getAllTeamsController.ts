import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllTeamsUseCase } from "./getAllTeamsUseCase";

export class GetAllTeamsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getAllTeamsUseCase = container.resolve(GetAllTeamsUseCase)

        const result = getAllTeamsUseCase.execute()

        return response.json(result)
    }
}