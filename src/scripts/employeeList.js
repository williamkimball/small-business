const employeeCollectionModule = require("./databaseCollection")

const employeeList = Object.create({}, {
    "buildemployeeList": {
        value: function () {
            employeeCollectionModule.getEmployee()
                .then((response) => {
                    const currentListRef = document.querySelector(".list-employees-article")
                    if (currentListRef) {
                        currentListRef.remove()
                    }
                    const employeesArticle = document.createElement("article")
                    employeesArticle.className = "list-employees-article"
                    const employeeModule = require("./employee")
                    response.forEach(employee => {
                        employeesArticle.appendChild(employeeModule.createemployeeComponent(employee))
                    });
                    document.querySelector("#employeeCards").appendChild(employeesArticle)
                })
        }
    }
})

module.exports = employeeList
