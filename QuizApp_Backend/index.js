import express from "express"
import cors from "cors"
import  mongoose from "mongoose";
import connectDB from "./config/dbconfig.js";


const app = express()


app.use(cors());
app.use(express.json());
connectDB()
app.get("/", (req, res) => {
    res.send("hello");
})


import authRouter from "./routes/auth.routes.js"
app.use("/api/auth",authRouter)
import quizRouter from "./routes/quiz.routes.js";
app.use("/api/v1/quiz",quizRouter)
import categoryRouter from "./routes/category.routes.js";
app.use("/api/v1/categories",categoryRouter)
import dataimportRouter from "./routes/quizdataimport.routes.js";
app.use("/api/v1/quizzesindb",dataimportRouter);






   

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });



// app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })


   