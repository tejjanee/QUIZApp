import { Router } from "express"
import Quiz from "../model/quiz.model.js"
import qz from "../qz.js"

const router = Router()


router.route("/").post(async(req,res)=>{
    try{
        await Quiz.deleteMany();
        const quizzesInDB = await Quiz.insertMany(qz.data);
        res.json(quizzesInDB)
    }catch(err){
        console.log(err);
        res.json({ message: "unable to add data into DB"})
    }
})




export default router