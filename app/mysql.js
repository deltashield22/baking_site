const mysql = require('mysql');

let conn = null;

conn = mysql.createConnection({
    host: 'sam-server.cusk3qibqtzd.us-east-1.rds.amazonaws.com',
    database: 'baking',
    user: 'deltashield',
    password: 'Vulcanlogic'
});

function connect() {
    if(conn !== null) { return Promise.resolve(conn) }

    return new Promise((resolve, reject) => {
        conn.connect(function(err) {
        if(err) reject(err);
        resolve(conn)
    })
});
}

module.exports = {
    connect,
    connection: conn
}