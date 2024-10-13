import prisma from "../config/prisma.js";
import supabase from "../config/supabase.js";

const postFileCreate = async (req, res, next) => {
    const { file } = req;
    const { data, error } = await supabase.storage
        .from("supabase-storage-journey")
        .upload(file.originalname, file.buffer, {
            contentType: file.mimetype,
            upsert: true
        });

    if (data) {
        const { data: { publicUrl } } = supabase.storage
            .from("supabase-storage-journey")
            .getPublicUrl(data.path);


        await prisma.file.create({
            data: {
                name: file.originalname,
                size: file.size,
                url: publicUrl,
                userId: req.user.id,
            }
        });
    }

    if (error) next(error);
    res.redirect("/home");
}

export default postFileCreate;