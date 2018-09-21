var connection = require("../config/connection.js")


//objtoSQL
//
function printQuestionMarks(num){
    var arr = [];

    for (var i= 0 ; i< num; i+=1){
        arr.push("?");
    }
    return arr.toString();
}





function objToSql(ob){
    var arr =[];

    //lopping through!
    for (var key in ob){
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob,key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
               value = " ' " + value + " ' ";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}



///HOW TO USE ?? INSTEAD OF + + in this variable!
var orm = {
    selectAll: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, cols,vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err,result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    update: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table; 

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err,result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function(table, condition, cb){
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err,result){
            if (err){
                throw err;
            }

            cb(result);
        })
    }

}



module.exports = orm;