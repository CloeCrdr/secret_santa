const express = require("express")
const router = express.Router()
const connectionBdd = require("../config/db");

// routes to get groups and users infos 
router.get("/", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT g.id,g.nom,(SELECT CONCAT(user.prenom,' ',user.nom)FROM user WHERE user.id = g.admin_id) AS admin FROM groupe AS g", (err, resp) => {
        if(err) throw err
        res.send(resp)
        })
    })
})

//// route to get group by id
router.get("/:group_id", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT gu.id,gu.user_id,gu.groupe_id,g.nom as groupe,u.id,u.nom,u.prenom,u.email FROM groupe_user AS gu LEFT JOIN user AS u ON u.id = gu.user_id LEFT JOIN `groupe` AS g ON g.id = gu.groupe_id WHERE groupe_id = ?", 
        [req.params.group_id], 
        (err, resp) => {
        if(err) throw err
        res.send(resp)
        })
    })
})

// route to get group informations and user info by user_id
router.get("/profile/:user_id", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM groupe AS g LEFT JOIN groupe_user AS gu ON gu.groupe_id = g.id WHERE gu.user_id = ?",
        [req.params.user_id], 
        (err, resp) => {
        if(err) throw err
        res.send(resp)
        })
    })
})


// route to create a new user
router.post("/addNew", (req, res) => {
    return new Promise ((result, reject) => {
        connectionBdd.query("INSERT INTO groupe (nom, admin_id) VALUES (?, ?)",
        [req.body.nom, req.body.admin_id],
        (err, resp) => {
            if(err) throw err
            res.send(resp)
        })
    })
})



module.exports = router