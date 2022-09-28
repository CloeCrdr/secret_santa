import mysql from 'mysql2';

const connectionBdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "secret_santa",
    port: 3306
});

function getUsers(){
    return new Promise((result, reject) => {
        connectionBdd.query("SELECT * FROM user ", (err, data) => {
            if (err) {
                reject(err);
                console.log("error");
            }
            else {
                result(data);
                console.log("succes");
            }
        });
    });
}

module.exports = connectionBdd