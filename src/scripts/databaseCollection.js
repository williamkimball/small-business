const $ = require ("jquery")
const databaseCollection = Object.create({}, {
    "getEmployee": {
        value: function () {
            return $.ajax("http://localhost:3000/employees")
        }
    },
    "getComp": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/Computers/${id}`)
        }
    },
    "getDeparment": {
        value: function (id) {
            return $.ajax(`http://localhost:3000/departments/${id}`)
        }
    },
});

module.exports = databaseCollection

