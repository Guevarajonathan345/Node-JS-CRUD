import { Router } from 'express';
import { getProductos, createProducto, updateProducto, deleteProducto } from '../controllers/productoController.js';
import { validateProductCreation } from '../middleware/productoValidator.js'; 
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

//RUTAS CRUD

/*router.get('/', getProductos);
router.post('/', validateProductCreation, createProducto);
router.put('/:id',validateProductCreation ,updateProducto);
router.delete('/:id', deleteProducto);*/

//RUTAS PROTEGIDAS (JWT)

router.get('/', getProductos);
router.post('/', protect, validateProductCreation, createProducto);
router.put('/:id', protect, validateProductCreation, updateProducto);
router.delete('/:id', protect, deleteProducto);


export default router;
