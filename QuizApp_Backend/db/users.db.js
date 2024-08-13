import { v4 as uuid } from 'uuid';


const userdata={
    "users": [
        {
            id: uuid(),
            username: "tej_janee111",
            password: "tej",
            emailId: "tj@gmail.com",
        },
        {
            id: uuid(),
            username: "csc_208",
            password: "csc",
            emailId: "cs@gmail.com",
        },
        {
            id: uuid(),
            username: "ritik",
            password: "rit",
            emailId: "rk@gmail.com",

        }

    ]
}
export default userdata;