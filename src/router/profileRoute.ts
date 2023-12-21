import express from "express";
import { addUserProfile, getAllUserProfiles, removeUserProfile, updateUserProfile,getByIdUserProfile } from "../controllers/profileController";

const router:express.Router = express.Router()

router.post("/addProfile/:userId",addUserProfile)
router.get('/getAllUserProfiles',getAllUserProfiles)
router.delete('/removeUserProfile/:id',removeUserProfile)
router.put('/updateUserProfile/:id',updateUserProfile)
router.get('/getbyidUserProfile/:id',getByIdUserProfile)

export default router;