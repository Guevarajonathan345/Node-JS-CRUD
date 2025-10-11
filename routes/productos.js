import {Router} from 'express';
import {getProductos, createProducto, updateProducto, deleteProducto} from '../controllers/productoController.js';
import { validateProductCreation } from '../middleware/productoValidator.js';   

const router = Router();

//RUTAS CRUD

router.get('/', getProductos);
router.post('/', validateProductCreation, createProducto);
router.put('/:id',validateProductCreation ,updateProducto);
router.delete('/:id', deleteProducto);

export default router;