var connection = require("../config/connection")

var tableName = "burger"

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    devouredBurgers: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + " WHERE devour = 1;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ")" + " VALUES (" + printQuestionMarks(vals.length) + ")";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (updatedValue, condition, cb) {
        var queryString = "UPDATE burger SET ? WHERE id = ? ";
        connection.query(queryString, [updatedValue, condition], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    deleteOne: function (updatedValue, cb) {
        console.log("INCOMING ID: " + updatedValue);
        var queryString = "DELETE FROM burger WHERE id = ? ";
        connection.query(queryString, [updatedValue], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;