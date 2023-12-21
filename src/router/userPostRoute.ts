import express from "express";
import { addUserPost, getAllUserPost, removeUserPost, updateUserPost, getByUserPost } from "../controllers/userPostController";

const router:express.Router = express.Router()

router.post("/addPost/:authorId",addUserPost)
router.get('/getAllUserPost',getAllUserPost)
router.delete('/removeUserPost/:id',removeUserPost)
router.put('/updateUserPost/:id',updateUserPost)
router.get('/getbyUserPost/:id',getByUserPost)

export default router;