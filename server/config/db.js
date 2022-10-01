const mysql = require("mysql2")

const connectionBdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "secret_santa",
    port: 3306
});

module.exports = connectionBdd