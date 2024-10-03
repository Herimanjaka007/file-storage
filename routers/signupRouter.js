import express from "express";
import getSignup from "../controllers/getSignup.js";
import postSignup from "../controllers/postSignup.js";

const signupRouter = express.Router();

signupRouter.get("/", getSignup);
signupRouter.post("/", postSignup);

export default signupRouter;