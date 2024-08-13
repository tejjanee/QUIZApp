import { Router } from "express"
import Quiz from "../model/quiz.model.js"
// import qz from "../qz.js"

const router = Router()


router.route("/").get(async (req, res) => {
    try {
        const quiz = await Quiz.find({});
        res.json(quiz)
    }catch(err){
        res.status(404).json({ message: "Could not find quizzes" })
    }
}

)

export default router


