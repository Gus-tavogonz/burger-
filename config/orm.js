var connection = require("../config/connection.js")


//objtoSQL

function objToSql(ob){
    var arr =[];

    //lopping through!
    for (var key in ob){
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob,key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
               value = " ' " + value + " ' " 
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function (whatToselect, tableInput, cb){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToselect, tableInput], function(err,result){
            if (err) throw err;
            cb(result);
        })
    }
    // create: function(addOne, tableInput){
    //     var queryString = "INSERT ?? INTO ??";
    //     connection.query(queryString, [addOne, tableInput], function(err,result){
    //         if (err) throw err;
    //         console.log(result);
    //     })
    // }
}



module.exports = orm;