import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => res.render("home"));

export default homeRouter;