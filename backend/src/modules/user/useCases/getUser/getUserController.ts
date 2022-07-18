import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserUseCase } from "./getUserUseCase";

class GetUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id: userId } = request.user

        const getUserUseCase = container.resolve(GetUserUseCase)

        const result = await getUserUseCase.execute(userId)

        return response.json(result)
    }
}

export { GetUserController }