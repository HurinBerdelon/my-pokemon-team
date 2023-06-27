import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserByIdUseCase } from "./getUserByIdUseCase";

export class GetUserByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id: userId } = request.params

        const getUserByIdUseCase = container.resolve(GetUserByIdUseCase)

        const result = await getUserByIdUseCase.execute(userId)

        return response.json(result)
    }
}