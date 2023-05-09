const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://uttamkr:uttamkr@cluster0.srklfsc.mongodb.net/Employee?retryWrites=true&w=majority")
const employeeSchema = mongoose.Schema({
f_name:String,
l_name:String,
email:String,
department:String,
salary:Number
})

const EmployeModel = mongoose.model("employee_list",employeeSchema)

module.exports = {connection,EmployeModel}