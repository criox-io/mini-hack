import { Router } from "express";
import { login } from "./auth.controller.js";

const router = Router();
router.route("/").post(login);

export default router;
