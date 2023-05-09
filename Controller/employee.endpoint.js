const express = require("express")
const EmployeRouter = express.Router()
const {EmployeModel} = require("../Model/model")

EmployeRouter.get("/get",async(req,res)=>{
    console.log("Testing Get Request");
    res.send("Testing Get")
})

EmployeRouter.post("/post",async(req,res)=>{
    const payload = req.body
    try {
        const employee = new EmployeModel(payload)
        await employee.save()
        res.status(200).send({"msg":"New Employee Details Added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

EmployeRouter.patch("/patch",async(req,res)=>{
    console.log("Testing Get Request");
    res.send("Testing Patch")
})


EmployeRouter.delete("/delete",async(req,res)=>{
    console.log("Testing Get Request");
    res.send("Testing Delete")
})

module.exports = {EmployeRouter}