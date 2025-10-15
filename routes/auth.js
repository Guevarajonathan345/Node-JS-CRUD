import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = Router();

//RUTAS CRUD
router.post('/registro', registerUser);
router.post('/login', loginUser);

export default router;
