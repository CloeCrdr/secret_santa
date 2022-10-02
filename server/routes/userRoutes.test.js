const router = require('./userRoutes')
const request = require('supertest');
const mysql = require("mysql2")
const express = require("express")
const app = express();
const userData = require('../spec/user.json')

app.use(express.urlencoded({extended: true}))
app.use('/', router)

jest.fn().mockReturnValueOnce(userData)

describe('User Routes', () => {

    it("Get all users", async () => {
        await request(app).get("/").expect(200).then(resp => {
            expect(resp.body.length).toEqual(1)
        })
    })

    it("Get user by id", async () => {
        await request(app).get("/1").expect(200).then(resp => {
            expect(resp.body[0].id).toEqual(1)
            expect(resp.body.length).toEqual(1)
        })
    })

    it("Get user if mail and password matching", async () => {
        const data = {
            email: "test@mail.fr",
            password: "test"
        }

        await request(app).get(`/check/${data.email}/${data.password}`)
        .expect(200)
        .then(resp => {
            expect(resp.body[0].email).toEqual("test@mail.fr")
            expect(resp.body.length).toEqual(1)
        })    
    })
})