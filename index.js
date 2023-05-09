const express = require("express")
const app = express()
const {connection} = require("./Model/model")
const {EmployeRouter} = require("./Controller/employee.endpoint")
app.use(express.json())
app.use("/employee",EmployeRouter)

app.listen(4500,async()=>{
    try {
        await connection
        console.log("Server is Running")
    } catch (error) {
        console.log("Error",error.message)
    }
})