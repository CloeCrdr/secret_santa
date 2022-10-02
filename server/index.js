const express = require("express");
const connectionBdd = require("./config/db");
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const groupRoutes = require("./routes/groupRoutes")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('connected')
})

connectionBdd.connect((err) => {
    if (err) console.log(err)
    app.use("/user", userRoutes)
    app.use("/group", groupRoutes)
})

app.listen(3001, () => {
    console.log("http://localhost:3001/")
})