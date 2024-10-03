import { Router } from "express";
import { register,login } from "../../controllers/Admin/User.controller.js";

const adminRouter = Router();


adminRouter.route("/register").post(register);

adminRouter.route("/login").post(login)

export default adminRouter;
