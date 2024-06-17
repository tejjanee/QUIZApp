import { Router } from "express"

import qz from "../qz.js"
const router = Router()



router.route("/").get((req,res)=>{
    res.json(qz)
})



export default router