const { pool } = 


dontenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    max: 10,

});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('Conexion exitosa a la base de datos');
        client.release();
    } catch (error) {
        console.error('Error de conexion a la base de datos', error);
    }
}

testConnection();

module.exports = pool;
