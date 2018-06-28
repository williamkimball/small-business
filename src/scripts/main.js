const database = require ("./databaseCollection")
const employee = require("./employee")


let employees = database.getEmployee()
const contactList = require("./employeeList")

contactList.buildemployeeList();

// console.log(employees)