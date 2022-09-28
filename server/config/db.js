const mysql = require("mysql")
const app = express()
const express = require("express")

export const connectionBdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "secret_santa",
    port: 3306
});

app.get("/", (rep, res) => {
    res.send("hello")
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})