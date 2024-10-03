import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import prisma from "./prisma.js";
import bcryptjs from "bcryptjs";

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });

        if (!user) {
            return done(null, false, { message: "username doesn't exist." })
        }

        const authentic = await bcryptjs.compare(password, user.password);

        if (authentic) {
            return done(null, user);
        }
        return done(null, false, { message: "Wrong password" })

    } catch (error) {
        return done(error);
    }
}))

passport.serializeUser(async (user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        if (user) return done(null, user);
    } catch (error) {
        return done(error);
    }
});

export default passport;