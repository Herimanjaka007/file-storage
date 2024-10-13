import express from "express";
import authenticate from "../middlewares/authenticate.js";
import postFolderCreate from "../controllers/postFolderCreate.js";
import getHome from "../controllers/getHome.js";
import getFolderDelete from "../controllers/getFolderDelete.js";
import postFileCreate from "../controllers/postFileCreate.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const homeRouter = express.Router();

homeRouter.get("/", authenticate, getHome);
homeRouter.get("/logout", authenticate, async (req, res, next) => {
    req.logout(err => next(err));
    res.redirect("/signin");
});

homeRouter.post("/folder/create", authenticate, postFolderCreate);
homeRouter.get("/folder/:id/delete", authenticate, getFolderDelete);
homeRouter.post("/file/create", authenticate, upload.single("file"), postFileCreate)

export default homeRouter;