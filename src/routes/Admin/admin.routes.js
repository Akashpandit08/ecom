import { Router } from "express";
import { register } from "../../controllers/Admin/User.controller.js";

const adminRouter = Router();


adminRouter.route("/register").post(register);

export default adminRouter;
