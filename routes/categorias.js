import { Router } from "express";
import { getCategorias, createCategorias, } from "../controllers/categoriaController.js";

const router = Router();

//RUTAS CRUD

router.get('/', getCategorias);
router.post('/', createCategorias);

export default router;