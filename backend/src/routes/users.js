import { Router } from 'express';
import { getConnection, sql } from '../config/db.js';


const router = Router();

// POST /api/users - crear usuario
router.post('/', async (req, res) => {
    try {
        const { id_user, name_user, email_user } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id_user', sql.VarChar(128), id_user)
            .input('name_user', sql.VarChar(128), name_user)
            .input('email_user', sql.VarChar(128), email_user)
            .input('id_rol', sql.Int, 2)
            .query('INSERT INTO users (id_user, name_user, email_user, id_rol) VALUES (@id_user, @name_user, @email_user, @id_rol)');
        res.status(201).json({ status: 'success', message: 'Usuario creado correctamente' })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

// GET /api/users - obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`
                SELECT u.id_user, u.name_user, u.email_user, u.profile_picture, u.bio, r.name_rol
                FROM users u
                LEFT JOIN roles r ON u.id_rol = r.id_rol
            `);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})


// GET /api/users/:id - obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();

        const result = await pool.request()
            .input('id', sql.VarChar(128), id)
            .query('SELECT u.id_user, u.name_user, u.email_user, u.bio, r.name_rol FROM users u LEFT JOIN roles r ON u.id_rol = r.id_rol WHERE u.id_user = @id');
        const user = result.recordset[0];
        if (!user) return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

export default router;
