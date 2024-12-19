import prisma from "../../Database/db.config.js";

export const addPost = async (req, res) => {
    const { title, content, user_id } = req.body;
    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                user_id:Number(user_id)
            }
        })
        res.status(201).json({ message: "Post created successfully", post: newPost })
    } catch (error) {
        res.status(500).json({ message: "An error occurred while creating the post", error:error.message });
    }
}

export const getPost = async (req,res) => {
    try{
        const { id } = req.query
        const post = await prisma.post.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(post){
            res.status(200).json({ message: "Post retrieved successfully", post })
        } else {
            res.status(404).json({ message: "Post not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while getting post", error:error.message});
    }
}

export const updatePost = async ( req, res) => {
    try{
        const {post_id, title, content, user_id } = req.body;
        const updatedPost = await prisma.post.updateMany({
            where:{
                id:Number(post_id)
            },
            data:{
                title,
                content,
                user_id:Number(user_id)
            }
        })
        if(updatedPost){
            res.status(200).json({ message: "Post updated successfully", post: updatedPost })
        } else {
            res.status(404).json({ message: "Post not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating post", error:error.message});
    }
}

export const deletePost = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedPost = await prisma.post.delete({
            where: {
                id:Number(id)
            }
        })
        if(deletedPost){
            res.status(200).json({ message: "Post deleted successfully" })
        } else {
            res.status(404).json({ message: "Post not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while deleting post", error:error.message});
    }
}

