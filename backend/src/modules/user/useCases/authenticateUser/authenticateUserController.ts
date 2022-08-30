import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

export class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { providerId, name, imageUrl } = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const result = await authenticateUserUseCase.execute(providerId, name, imageUrl)

        return response.json(result)
    }
}