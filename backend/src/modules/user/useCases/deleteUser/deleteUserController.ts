import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./deleteUserUserCase";


class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id: user_id } = request.user

        const deleteUserUseCase = container.resolve(DeleteUserUseCase)

        await deleteUserUseCase.execute(user_id)

        return response.send()
    }
}

export { DeleteUserController }