import { pool } from '../config/db.js';


export const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );
        res.status(201).json({ id: result.insertId, nombre, descripcion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const obtenerCategorias = async (req, res) => {
    try {
        const [categorias] = await pool.query('SELECT * FROM categorias');
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const obtenerCategoriaConProductos = async (req, res) => {
    const { id } = req.params;
    try {

        const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
        if (categoria.length === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        
        const [productos] = await pool.query('SELECT * FROM productos WHERE categoriaId = ?', [id]);
        
        
        const respuesta = { ...categoria[0], productos };
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        await pool.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nombre, descripcion, id]
        );
        res.status(200).json({ mensaje: 'Categoría actualizada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        // Al estar configurado ON DELETE CASCADE en MySQL, no necesitas borrar los productos manualmente
        const [result] = await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.status(200).json({ mensaje: 'Categoría y todos sus productos eliminados correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};