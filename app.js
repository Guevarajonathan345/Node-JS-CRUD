import 'dotenv/config';
import express from 'express';
import productosRoute from './routes/productos.js';
import categoriasRoute from './routes/categorias.js';


const app = express();
const PORT = 3000;

//PARSEAR COMO JSON
app.use(express.json());

//USAR RUTAS
app.use('/api/productos', productosRoute);
app.use('/api/categorias', categoriasRoute);

import { notFound, errorHandler } from './middleware/errorHandler.js'

//despues de ir por todas las rutas, entra el manejador 404 
app.use(notFound)
//manejo general de errores en general
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});
