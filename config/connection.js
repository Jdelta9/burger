//require the module
var mysql = require('mysql');
// Create the MySQL connection object
var connection;

if (Process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     //connection = mysql.createConnection({
     //host: 'localhost'
     //user: 'root',
     //password: 'hacktheplanet',
     //database: 'todoagain_db'
    //});

    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
    
};
// Make the connection to MySQL
connection.connect(function (err) {
    if (err) {
        console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
