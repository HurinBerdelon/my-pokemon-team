import { Router } from "express";
import uploadConfig from "../config/upload";
import multer from 'multer'
import { GetUserController } from "../modules/user/useCases/getUser/getUserController";
import { UpdateAvatarController } from "../modules/user/useCases/updateAvatar/updateAvatarController";
import { DeleteUserController } from "../modules/user/useCases/deleteUser/deleteUserController";
import { ensureAuthenticated } from "../middleware/ensuseAuthenticated";
import { tmpUploadFolder } from "../config/tmpUploadFolder";
import { GetUserByIdController } from "../modules/user/useCases/getUserById/getUserController";

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload(tmpUploadFolder))

const getUserController = new GetUserController()
const getUserByIdController = new GetUserByIdController()
const updateAvatarController = new UpdateAvatarController()
const deleteUserController = new DeleteUserController()

usersRoutes.get('/me', ensureAuthenticated, getUserController.handle)

usersRoutes.get('/user-by-id', getUserByIdController.handle)

usersRoutes.patch('/update-avatar',
    ensureAuthenticated,
    uploadAvatar.single('avatar'),
    updateAvatarController.handle)

usersRoutes.delete('/delete', ensureAuthenticated, deleteUserController.handle)

export { usersRoutes }