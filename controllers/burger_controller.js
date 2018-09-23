var express = require("express");

var router = express.Router();

//importing the burgers!

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    })
})

// router.get("/api/burgers", function(req,res){
 
//         res.json(burger);
//     })   




router.post("/api/burgers", function(req,res){
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name, 
    ], function(result){
        res.json({ id: result.insertId });
    })
})

// router.get("/api/burgers", function(req,res){
//     burger.selectAll()
// })

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition, req.params);

    burger.update({
        id:req.params.id,
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();            
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result){
        if (result.affectedRows == 0){

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
module.exports = router;