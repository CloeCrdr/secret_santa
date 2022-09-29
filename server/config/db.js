const mysql = require("mysql2")

const connectionBdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "secret_santa",
    port: 8889
});

module.exports = connectionBdd