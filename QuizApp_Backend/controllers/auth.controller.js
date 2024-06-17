import express from 'express'
import { v4 as uuid } from 'uuid';
import jwt from "jsonwebtoken"
import userdata from "../db/users.db.js"




// signupHnadler:
const signupHandler=(req,res)=>{
    const { username, password } =req.body;
    const isUserPresent = userdata.users.some(user => user.username === username);
    if (isUserPresent){
        res.status(422).json({ message: "User Already Exists"})
    }
    else{
        const id = uuid();
        const newUser = { id, username, password };
        userdata.users = [...userdata.users, newUser];
        const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
        res.json({ message: `Success - Created new user --> ${username}::${token}`})
    }
}





// loginHandler:
const loginHandler = (req, res) => {
    const { username, password } = req.body;
        const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
        if(isUserVerified){
            const token = jwt.sign({id: username}, process.env.SECRET_TOKEN)
            res.json({username, token, message: "User Verfied"})
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }
}
export {signupHandler,loginHandler};