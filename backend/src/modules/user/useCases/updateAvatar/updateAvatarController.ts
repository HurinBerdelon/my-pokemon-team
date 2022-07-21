import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUseCase } from "./updateAvatarUseCase";

export class UpdateAvatarController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user

        const avatarFile = request.file.filename

        const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase)

        await updateAvatarUseCase.execute({ user_id, avatarFile })

        return response.send()
    }
}