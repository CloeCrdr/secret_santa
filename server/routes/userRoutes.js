const express = require("express")
const router = express.Router()
const connectionBdd = require("../config/db");

// route to get all users
router.get("/", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM user", (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})

// route to check email and password of a user
router.get("/check/:email/:password", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM user WHERE email = ? AND password = ?",
        [req.params.email, req.params.password],
        (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})

// route to get user by id
router.get("/:id", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM user WHERE id = ?",
        [req.params.id],
        (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})

// route to create a new user
router.post("/addNew", (req, res) => {
    return new Promise ((result, reject) => {
        connectionBdd.query("INSERT INTO user (email, nom, prenom, password) VALUES (?, ?, ?, ?)",
        [req.body.email, req.body.nom, req.body.prenom, req.body.password],
        (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})

// route to update a user
router.post("/update/:id", (req, res) => {
    return new Promise ((result, reject) => {
        connectionBdd.query("UPDATE user SET nom = ? , prenom = ?, email = ?, password = ? WHERE id = ? ",
        [req.body.nom, req.body.prenom, req.body.email, req.body.password, req.params.id],
        (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})

module.exports = router