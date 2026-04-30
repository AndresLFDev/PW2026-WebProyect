import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

export {sql};
