import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensuseAuthenticated";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/authenticateUserController";
import { LogoutUserController } from "../modules/user/useCases/logoutUser/logoutUserController";
import { RefreshUserController } from "../modules/user/useCases/refreshUser/refreshUserController";

export const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshUserController = new RefreshUserController()
const logoutUserController = new LogoutUserController()

authenticateRoutes.post('/sessions', authenticateUserController.handle)
authenticateRoutes.post('/refresh', refreshUserController.handle)
authenticateRoutes.delete('/logout', ensureAuthenticated, logoutUserController.handle)