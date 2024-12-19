import prisma from "../../Database/db.config.js";
export const addComment = async (req, res) => {
    const { comment, post_id, user_id } = req.body;
    try {
        const newComment = await prisma.comment.create({
            data: {
                comment,
                post_id: Number(post_id),
                user_id: Number(user_id)
            }
        })
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create comment", error });
    }
}

export const updateComment = async (req, res) => {
    const { comment, post_id, user_id, id } = req.body;
    try {
        const updatedComment = await prisma.comment.update({
            where: {
                id: Number(id)
            },
            data: {
                comment,
                post_id: Number(post_id),
                user_id: Number(user_id)
            }
        })
        res.status(200).json(updatedComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update comment", error });
    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.body;
    try{
        const deletedComment = await prisma.comment.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(deletedComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete comment", error });
    }
}

export const getComment = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await prisma.comment.findUnique({
            where: {
                id: Number(id)
            }
        })
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve comment", error });
    }
}

