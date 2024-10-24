import { Router } from "express";
import { register,login   ,logout } from "../../controllers/Admin/User.controller.js";
import extractUserId from "../../utils/authMiddleware.js";
import {createCategory}  from "../../controllers/Admin/Category.controller.js"
import  {uploadImage} from '../../utils/uploadImage.js';

const adminRouter = Router();
adminRouter.route("/register").post(register);

adminRouter.route("/login").post(login)
adminRouter.use(extractUserId);



adminRouter.route("/logout").post(logout)
adminRouter.post('/categorycreate', uploadImage('categoryImage'), createCategory);

export default adminRouter;
