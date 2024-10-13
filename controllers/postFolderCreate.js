import prisma from "../config/prisma.js";

const postFolderCreate = async (req, res, next) => {
    try {
        const { folderName } = req.body;
        await prisma.folder.create({
            data: {
                name: folderName,
                userId: req.user.id,
            }
        });
    } catch (error) {
        next(error);
        console.log(error);
    } finally {
        res.redirect("/home");
    }
}

export default postFolderCreate;