var connection = require("./connection.js")



var orm = {
    selectAll: function (whatToselect, tableInput){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToselect, tableInput], function(err,result){
            if (err) throw err;
            console.log(result)
        })
    },
    //create: function(addOne, tableInput){}
}



module.exports = orm;