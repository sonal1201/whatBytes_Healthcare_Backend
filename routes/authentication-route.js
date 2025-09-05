const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth-controller");

const userroute = express.Router();

userroute.post("/register", registerUser);
userroute.post("/login", loginUser);

module.exports = { userroute };