const userRoutes = require("./userRoutes")
import request from 'supertest';
const express = require("express")
const app = new express();

describe('User Routes', () => {
    const user = require("../spec/user.json")

    test("Get all users", async () => {
        const res = await request(app).get("/user/")
        expect(200)
        expect(user.length).toEqual(6)
    })
})