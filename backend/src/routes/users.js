import { Router } from 'express';
import { getConnection } from '../config/db.js';


const router = Router();

// POST /api/users - crear usuario
router.post('/', async (req, res) => {
    try {
        const { id_user, name_user, email_user } = req.body;
        const pool = await getConnection();
        await pool.query('INSERT INTO users (id_user, name_user, email_user, id_rol) VALUES ($1, $2, $3, 2)', [id_user, name_user, email_user]);
        res.status(201).json({ status: 'success', message: 'Usuario creado correctamente' })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

// GET /api/users - obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.query(`
                SELECT u.id_user, u.name_user, u.email_user, u.profile_picture, u.bio, r.name_rol
                FROM users u
                LEFT JOIN roles r ON u.id_rol = r.id_rol
            `);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})


// GET /api/users/:id - obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.query('SELECT u.id_user, u.name_user, u.email_user, u.bio, r.name_rol FROM users u LEFT JOIN roles r ON u.id_rol = r.id_rol WHERE u.id_user = $1', [id]);
        const user = result.rows[0];
        if (!user) return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
})

export default router;
