import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addUserProfile = async (req:any, res:any) => {
    try {
        const { bio } = req.body
        const { userId } = req.params
        const users = await prisma.profile.create({
            data: { 
                userId: parseInt(userId),
                bio: bio 
            }
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getAllUserProfiles = async (req:any, res:any) => {
    try {
        const users = await prisma.profile.findMany({
            include:{
                user: true
            }
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const removeUserProfile = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const remove = await prisma.profile.delete({
            where:{id: parseInt(id)}
        });
        return res.json(remove);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const updateUserProfile = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const {bio} = req.body
            
        const user = await prisma.profile.update({
         where:{id: parseInt(id)},
         data: {
            bio: bio
        }
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getByIdUserProfile = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const findProfile = await prisma.profile.findUnique({
            where:{
                id: parseInt(id)
            },
            include:{
                user: true
            }
        });
        return res.status(200).json(findProfile);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}