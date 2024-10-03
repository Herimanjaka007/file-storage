import bcryptjs from "bcryptjs";
import prisma from "../config/prisma.js";

const postSignup = async (req, res, next) => {
    try {
        const { password } = req.body;
        bcryptjs.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                return next(err);
            }

            await prisma.user.create({
                data: { ...req.body, password: hashedPassword }
            });
        })
        res.redirect("/signin");
        
    } catch (error) {
        next(error);
    }
}

export default postSignup;