import prisma from "../../Database/db.config.js";

export const onboardUser = async (req, res) => {
    const {email, name, password} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (findUser) {
        return res.status(409).json({message: "User already exists"});
    } else {
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password
            }
        });
        return res.status(200).json({message: "Prisma Conn successfully", user: newUser});
    }
}

export const getUser = async (req, res) => {
    const {id} = req.query;
    try{
        const user = await prisma.user.findFirst({where:{id: Number(id)}});
        if(user){
            return res.status(200).json({message: "User fetched successfully", user: user});
        } else {
            return res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error fetching user", error: error.message});
    }
}

export const deleteUser = async(req, res) => {
    const { id } = req.params;
    try{
        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error deleting user", error: error.message});
    }
}