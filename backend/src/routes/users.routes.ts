import { Router } from "express";
import uploadConfig from "../config/upload";
import multer from 'multer'
import { GetUserController } from "../modules/user/useCases/getUser/getUserController";
import { UpdateAvatarController } from "../modules/user/useCases/updateAvatar/updateAvatarController";
import { DeleteUserController } from "../modules/user/useCases/deleteUser/deleteUserController";
import { tmpAvatarFolder } from "../config/tmpAvatarFolder";

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload(tmpAvatarFolder))

// const createUserController = new CreateUserController()
const getUserController = new GetUserController()
const updateAvatarController = new UpdateAvatarController()
const deleteUserController = new DeleteUserController()

// usersRoutes.get('', ensureAuthenticated, getUserController.handle)

usersRoutes.patch('/update-avatar',
    // ensureAuthenticated,
    uploadAvatar.single('avatar'),
    updateAvatarController.handle)

// usersRoutes.delete('', ensureAuthenticated, deleteUserController.handle)

export { usersRoutes }