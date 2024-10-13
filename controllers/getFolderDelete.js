import prisma from "../config/prisma.js";

const getFolderDelete = async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.folder.delete({
            where: {
                id: parseInt(id)
            }
        });
    } catch (error) {
        next(error);
    }

    res.redirect("/home");
}

export default getFolderDelete;