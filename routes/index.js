const express = require('express');
const routes = express.Router();
const { users } = require('../controllers');
const { login, register, getUserById } = require('../controllers');


routes.get("/", users);
routes.post("/login", login);
routes.post("/register", register);
routes.get("/:id", getUserById)

module.exports = routes;