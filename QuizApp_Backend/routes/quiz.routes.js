import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import qz from "../qz.js"
const router = Router()



router.route("/").get(verifyJWT,(req,res)=>{
    res.json(qz)
})



export default router
