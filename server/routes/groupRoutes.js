const express = require("express")
const router = express.Router()
const connectionBdd = require("../config/db");

router.get("/", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT g.id,g.nom,(SELECT CONCAT(user.prenom,' ',user.nom)FROM user WHERE user.id = g.admin_id) AS admin FROM groupe AS g", (err, resp) => {
        if(err) throw err
        res.send(resp)
        })
    })
})

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