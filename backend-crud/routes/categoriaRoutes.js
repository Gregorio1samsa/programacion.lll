import express from 'express';
import {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriaConProductos,
    actualizarCategoria,
    eliminarCategoria
} from '../controllers/categoriaController.js';

const router = express.Router();

router.post('/', crearCategoria);                     
router.get('/', obtenerCategorias);                   
router.get('/:id', obtenerCategoriaConProductos);    
router.patch('/:id', actualizarCategoria);           
router.delete('/:id', eliminarCategoria);             

export default router;