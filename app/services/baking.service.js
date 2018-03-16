const mysql = require('../mysql');
const conn = mysql.connection;

module.exports = {
    readAll: readAll
}

function readAll(query) {
    let input = query ? `SELECT * FROM cards WHERE type = '${query}'` : "SELECT * FROM cards";
    return new Promise((resolve, reject) => {
        conn.query(input, function(err, result, fields) {
        
            if(err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    });
}