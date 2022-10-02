const router = require('./groupRoutes')
const request = require('supertest');
const express = require("express")
const app = express();

app.use(express.urlencoded({extended: true}))
app.use('/', router)

describe('Group Routes', () => {

    it("Get groups and users infos", async () => {
        await request(app).get("/").expect(200).then(resp => {
            expect(resp.body.length).toEqual(2)
        })
    })

    it("Get group by id", async () => {
        await request(app).get("/1").expect(200).then(resp => {
            expect(resp.body[0].id).toEqual(1)
            expect(resp.body.length).toEqual(1)
        })
    })

    it("route to get group informations and user info by user_id", async () => {
        await request(app).get("/profile/1")
        .expect(200)
        .then(resp => {
            expect(resp.body[0].admin_id).toEqual(1)
            expect(resp.body.length).toEqual(2)
        })    
    })
})