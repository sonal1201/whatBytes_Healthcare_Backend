import express from "express";
import { loginUser, registerUser } from "../controllers/auth-controller";

export const userroute = express.Router();

userroute.post("/register", registerUser);
userroute.post("/login", loginUser);
