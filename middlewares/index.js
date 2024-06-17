import express from "express"
import cors from "cors"
import 'dotenv/config'
const app = express()

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello");
})



import userRouter from "./routes/auth.routes.js";
app.use("/api/v1/users",userRouter)
import quizRouter from "./routes/quiz.routes.js";
app.use("/api/v1/quiz",quizRouter)
import categoryRouter from "./routes/category.routes.js";
app.use("/api/v1/categories",categoryRouter)





   





app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })


   