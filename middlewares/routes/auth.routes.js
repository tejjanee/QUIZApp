import { Router } from "express"
import {loginHandler,signupHandler} from "../controllers/auth.controller.js"

const router = Router()


router.route("/login").post( loginHandler)
router.route("/signup").post(signupHandler)


export default router