const express = require("express")
const { userRouter } = require("./Routes/user.route")
require('dotenv').config()
const connection = require('./Utils/db')

const app = express()
app.use(express.json())


app.get("/", (req,res) => {
    res.send("Welcome To API")
})

app.use("/users", userRouter)


app.listen(process.env.port, async() => {
    try{
        console.log("Connnected To the Database")
    }catch(err){
        console.log("Connnected To the Database", err)
    }
    console.log(`Server is running on the Port ${process.env.port}`)
})