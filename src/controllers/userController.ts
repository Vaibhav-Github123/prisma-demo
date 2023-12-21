import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllUsers = async (req:any, res:any) => {
    try {
        const users = await prisma.user.findMany({
            include:{
                profile: true,
                posts: true
            }
        })

      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };
export const createUser = async (req:any, res:any) => {
    try {
        const {email,name} = req.body
        const users = await prisma.user.create({
            data: {email,name}
        })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const removeUser = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const remove = await prisma.user.delete({
            where:{id: parseInt(id)}
        });
        return res.json(remove);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const updateUser = async (req:any, res:any) => {
    try {
        const { id } = req.params;
        const {email,name} = req.body
    
        if (!email) {
          return res.sendStatus(400);
        }
            
        const user = await prisma.user.update({
         where:{id: parseInt(id)},
         data: {
            email: email,
            name: name
        }
        });
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const findByid = async (req:any, res:any) => {
    try {
    const { id } = req.params;
    const findUser = await prisma.user.findUnique({
        where:{
            id: parseInt(id)
        },
        include:{
            profile: true,
            posts: true
        }
    });
    return res.status(200).json(findUser);
} catch (error) {
    console.log(error);
    return res.sendStatus(400);
}
};