import path from "node:path";
import express from "express";
import dotenv from "dotenv";
import expressSession from "express-session";
import passport from "./config/passport.js";
import signupRouter from "./routers/signupRouter.js";
import signinRouter from "./routers/signinRouter.js";
import homeRouter from "./routers/homeRouter.js";

dotenv.config();

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: "herimanjaka",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/home", homeRouter);

const PORT = process.env.PORT ?? 4000
app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));