var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            console.log(res)
            cb(res);
        })
    },
    devoured: function (cb) {
        orm.devouredBurgers("burger", function (res) {
            console.log(res)
            cb(res);
        })
    },
    add: function (cols, name, cb) {
        orm.insertOne("burger", cols, name, function (res) {
            cb(res)
        })
    },
    update: function (devour, condition, cb) {
        orm.updateOne(devour, condition, function (res) {
            cb(res);
        })
    },
    delete: function (id, cb) {
        console.log("burger Model ID: " + id)
        orm.deleteOne(id, function (res) {
            cb(res);
        })
    }
}

module.exports = burger;
