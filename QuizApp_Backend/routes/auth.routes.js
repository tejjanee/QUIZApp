import { Router } from "express"
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    number: { type: Number, required: true, uniquie: true },
    email: { type: String, required: true, uniquie: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

const loginHandler=async(req,res)=>{
        try {
           const user =await User.findOne({number:req.body.number});
           !user && res.status(401).json({ message: "Incorrect Mobile Number" });
           const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
           decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});
           const {password,...rest}=user._doc;
           const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN )
           res.json({...rest, accessToken});
        } catch (err) {
            console.log(err,"error in login")
        }
}
const signupHandler = async (req, res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error creating a user" })
    }
}


// import signupHandler from "../controllers/signupController";
const router = Router()
// const signupHandler=require("../controllers/signupController")
router.route("/register")
.post(signupHandler);
// const loginHandler=require("../controllers/loginController")
router.route("/login")
.post(loginHandler)


export default router