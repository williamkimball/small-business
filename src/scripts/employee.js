const $ = require("jquery")
const databaseCollection = require("./databaseCollection")

const employee = Object.create({}, {
    "createemployeeComponent": {
        value: function (employee) {

            const employeeSection = document.createElement("article")

            employeeSection.id = `${employee.id}`
            employeeSection.className = "employee"

            for (key in employee) {
                if (key === "comp") {
                    let compSection = document.createElement("section")

                    let comps = databaseCollection.getComp(employee[key])
                        .then((response) => {
                            // console.log("comp", response)

                            // console.log(comps["comp"])
                            compSection.textContent = `Currently using a ${response["comp"]}`
                            compSection.className = "employee__computer"
                        })
                    employeeSection.appendChild(compSection)
                } else if (key === "department") {
                    let depSection = document.createElement("section")

                    let deps = databaseCollection.getDeparment(employee[key])
                        .then((response) => {
                            // console.log("Department", response)

                            // console.log(deps["department"])
                            depSection.textContent = ` Works in ${response["name"]}`
                            depSection.className = "employee_department"
                        })
                    employeeSection.appendChild(depSection)
                }
                else if (key === "name") {
                    const paraElement = document.createElement("header")
                    let employeeHeader = document.createElement("h1")
                    paraElement.className = "employee_name"
                    employeeHeader.textContent = `${employee[key]}`
                    paraElement.appendChild(employeeHeader)
                    employeeSection.appendChild(paraElement)
                }
            }

            return employeeSection
        }
    }
})

module.exports = employee
