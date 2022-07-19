import { Router } from "express";
import cors from 'cors'

import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router()

// router.use(cors(), authenticateRoutes)

router.use('/users', cors(), usersRoutes)
router.use(cors(), authenticateRoutes)

export { router }