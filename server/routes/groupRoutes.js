const express = require("express")
const router = express.Router()
const connectionBdd = require("../config/db");

router.get("/", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM groupe", (err, resp) => {
        if(err) throw err
        res.send(resp)
        })
    })
})

router.get("/:group_id", (req, res) => {
    return new Promise (() => {
        connectionBdd.query("SELECT * FROM groupe_user AS gu LEFT JOIN user as u ON u.id = gu.user_id WHERE groupe_id = ?", 
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