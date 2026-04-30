import { Router } from 'express';
import { getConnection } from '../config/db.js';

const router = Router();

// POST /api/meetings - crear reunión
router.post('/', async (req, res) => {
    try {
        const { title, description, date_time, location, coordinates, max_capacity, created_by } = req.body;

        const pool = await getConnection();
        await pool.query('INSERT INTO meetings (title, description, date_time, location, coordinates, max_capacity, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7)', [title, description, date_time, location, coordinates, max_capacity, created_by]);
        res.json({ status: 'success', message: 'Reunión creada correctamente' });
    } catch (error) {
        console.error('Error en POST meetings:', error.message)  // ← agrega esto
        res.status(500).json({ message: error.message })
    }
})

// PUT /api/meetings/:id - editar reunión
router.put('/:id', async (req, res) => {
    try {
        const { title, description, date_time, location, coordinates, max_capacity } = req.body;
        const { id } = req.params;

        const pool = await getConnection()
        await pool.query('UPDATE meetings SET title = $1, description = $2, date_time = $3, location = $4, coordinates = $5, max_capacity = $6 WHERE id = $7', [title, description, date_time, location, coordinates, max_capacity, id]);
        
        res.json({ status: 'success', message: 'Reunión actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

// DELETE /api/meetings/:id - eliminar reunión
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        await pool.query('DELETE FROM meetings WHERE id = $1', [id]);
        res.json({ status: 'success', message: 'Reunión eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.query('SELECT * FROM meetings');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

export default router;