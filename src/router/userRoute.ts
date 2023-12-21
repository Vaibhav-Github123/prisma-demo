import  express  from "express";
import { getAllUsers, createUser, removeUser, updateUser, findByid} from "../controllers/userController";

const router:express.Router = express.Router()

router.get("/getAll",getAllUsers)
router.post("/add",createUser)
router.delete("/remove/:id",removeUser)
router.put("/update/:id",updateUser)
router.get("/getbyid/:id",findByid)

export default router;