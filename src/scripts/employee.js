const $ = require("jquery")
const databaseCollection = require("./databaseCollection")

const employee = Object.create({}, {
    "createemployeeComponent": {
        value: function (employee) {

            const employeeSection = document.createElement("section")

            employeeSection.id = `${employee.employeeId}`

            for (key in employee) {
                if (key === "comp") {
                    let compSection = document.createElement("p")

                    let comps = databaseCollection.getComp(employee[key])
                        .then((response) => {
                            // console.log("comp", response)

                            // console.log(comps["comp"])
                            compSection.textContent = `Computer: ${response["comp"]}`
                        })
                    employeeSection.appendChild(compSection)
                } else if (key === "department") {
                    let depSection = document.createElement("p")

                    let deps = databaseCollection.getDeparment(employee[key])
                        .then((response) => {
                            console.log("Department", response)

                            console.log(deps["department"])
                            depSection.textContent = `Department: ${response["name"]}`
                        })
                    employeeSection.appendChild(depSection)
                }
                else {
                    const paraElement = document.createElement("p")
                    paraElement.textContent = `Name: ${employee[key]}`
                    employeeSection.appendChild(paraElement)
                }
            }

            return employeeSection
        }
    }
})

module.exports = employee
