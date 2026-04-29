import { Router } from 'express';
import { getConnection } from '../config/db.js';
import sql from 'mssql';

const router = Router();

// POST /api/meetings - crear reunión
router.post('/', async (req, res) => {
    console.log('Body recibido:', req.body)
    try {
        const { title, description, date_time, location, coordinates, max_capacity, created_by } = req.body;

        const pool = await getConnection();
        await pool.request()
            .input('title', sql.VarChar, title)
            .input('description', sql.VarChar, description)
            .input('date_time', sql.DateTime, date_time)
            .input('location', sql.VarChar, location)
            .input('coordinates', sql.VarChar, coordinates)
            .input('max_capacity', sql.Int, max_capacity)
            .input('created_by', sql.VarChar, created_by)
            .query('INSERT INTO meetings (title, description, date_time, location, coordinates, max_capacity, created_by) VALUES (@title, @description, @date_time, @location, @coordinates, @max_capacity, @created_by)');
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
        await pool.request()
            .input('title', sql.VarChar, title)
            .input('description', sql.VarChar, description)
            .input('date_time', sql.DateTime, date_time)
            .input('location', sql.VarChar, location)
            .input('coordinates', sql.VarChar, coordinates)
            .input('max_capacity', sql.Int, max_capacity)
            .input('id', sql.Int, id)
            .query('UPDATE meetings SET title = @title, description = @description, date_time = @date_time, location = @location, coordinates = @coordinates, max_capacity = @max_capacity WHERE id = @id');
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
        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM meetings WHERE id = @id');
        res.json({ status: 'success', message: 'Reunión eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM meetings');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

export default router;