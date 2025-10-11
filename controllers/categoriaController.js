import pool from "../db.js";


//READ 
export const getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        res.status(500).json({message: "No se pudo obtener las categorias", error: error.message})
    }
};

//CREATE
export const createCategorias = async (req, res) => {
    const {nombre} = req.body;
    try {
        const [result] = await pool.query ( 
            'INSERT INTO categorias (nombre) VALUES (?)',
            [nombre]
        );
        res.status(201).json ({id: result.id, nombre});
    }catch (error) {
        res.status(500).json({message: "No se pudo crear la categoria", error: error.message})
    }
};

//DELETE

 export const deleteCategorias = async(req,res) => {
    const {id} = req.params;
    try { 
        const [result] = await pool.query ('DELETE FROM categorias where id =?', 
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'No se encontro esta categoria'});
        } else {
            res.json({message: 'Categoria eliminada correctamente'});
        }
    } catch (error){
        res.status(500).json({message: "No se pudo eliminar la categoria", error: error.message})
    }
 };
 