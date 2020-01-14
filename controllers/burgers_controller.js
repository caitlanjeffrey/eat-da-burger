console.log("controller uploaded")
var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    console.log("GET")
    burger.all(function (data) {
        const dburg = data.filter(x => x.devour === 1);
        const notdburg = data.filter(x => x.devour === 0);
        //console.log(dburg);
       // console.log(notdburg);
        res.render("index", {
            burgers: data,
            // devouredBurgers: dburg
        });
    })
});

router.post("/api/burger", function (req, res) {
    console.log(req.body.burger_name);

    res.json(data);
    })
});

router.put("/api/burger/:id", function (req, res) {

    var condition = "id = " + req.params.id;
    console.log("PUT", condition)
    burger.update(
        {
            devoured: true
        },
        condition,
        function (data) {
            // var burgerObj = {
            //     burger: data
            // }
            res.status(200).end();
        })
})

router.delete("api/burger/delete/:id", function (req, res) {
    console.log("Req params ID: " + req.params.id)
    burger.delete(req.params.id, function (result) {
        res.redirect("/");
    });
});

module.exports = router;