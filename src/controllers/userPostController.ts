import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const addUserPost = async (req:any, res:any) => {
    try {
        const { title, content, published } = req.body
        const { authorId } = req.params
        const users = await prisma.userPost.create({
            data: { 
                authorId: parseInt(authorId),
                title: title,
                content: content,
                published: published 
            }
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getAllUserPost = async (req:any, res:any) => {
    try {
        const users = await prisma.userPost.findMany({
            include:{
                author: true,
            }
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const removeUserPost = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const remove = await prisma.userPost.delete({
            where:{id: parseInt(id)}
        });
        return res.json(remove);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const updateUserPost = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const { title, content,published } = req.body
            
        const user = await prisma.userPost.update({
         where:{id: parseInt(id)},
         data: {
            title: title,
            content: content,
            published: published 
        }
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getByUserPost = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const findProfile = await prisma.userPost.findUnique({
            where:{
                id: parseInt(id)
            },
            include: {
                author: true
            }
        });
        return res.status(200).json(findProfile);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}