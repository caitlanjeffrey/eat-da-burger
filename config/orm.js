// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
