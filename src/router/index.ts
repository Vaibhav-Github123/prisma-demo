import  express  from "express";
import  userRouter from "../router/userRoute";
import profileRouter from "../router/profileRoute";
import userPostRouter from "../router/userPostRoute";

const router:express.Router = express.Router()

router.use("/",userRouter)
router.use("/",profileRouter)
router.use('/',userPostRouter)

export default router