import prisma from "../config/prisma.js";

const getHome = async (req, res, next) => {
    try {
        const folders = await prisma.folder.findMany({
            where: {
                userId: req.user.id,
            }
        });
        const files = await prisma.file.findMany({
            where: {
                userId: req.user.id
            }
        });

        res.render("home", { folders, files });
    } catch (error) {
        next(error);
        res.render("home");
    }
}

export default getHome;