import express from "express";
import getSignin from "../controllers/getSignin.js";
import passport from "../config/passport.js";

const signinRouter = express.Router();
signinRouter.get("/", getSignin);
signinRouter.post("/", passport.authenticate("local", {
    failureRedirect: "/signin",
    successRedirect: "/home"
}));

export default signinRouter