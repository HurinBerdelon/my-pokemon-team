import { Router } from "express";
import cors from 'cors'

import { usersRoutes } from "./users.routes";

const router = Router()

// router.use(cors(), authenticateRoutes)

router.use('/users', cors(), usersRoutes)

export { router }