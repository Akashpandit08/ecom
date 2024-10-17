import { Router } from "express";
import { register,login   ,logout } from "../../controllers/Admin/User.controller.js";
import extractUserId from "../../utils/authMiddleware.js";
import { uploadSingleImage } from '../../utils/uploadHelper.js';

const adminRouter = Router();
adminRouter.use(extractUserId);


adminRouter.route("/register").post(register);

adminRouter.route("/login").post(login)
adminRouter.route("/logout").post(logout)
adminRouter.post('/category', uploadSingleImage('categoryImage'), create);

export default adminRouter;
