import mysql from 'mysql2/promise';
import 'dotenv/config';


//conexion mysql
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Función de prueba de conexión
async function testDbConnection() {
    try {
        // Intenta obtener una conexión del pool
        const connection = await pool.getConnection();
        
        // Si tiene éxito, libera la conexión de vuelta al pool
        connection.release(); 
        
        console.log("✅ ¡Conexión exitosa a la base de datos MySQL!");
    } catch (error) {
        // Si hay un error, muestra el mensaje y detiene el proceso
        console.error("❌ ERROR: No se pudo conectar a la base de datos.");
        console.error("Detalles del error:", error.message);
        
        // Opcional: Termina la aplicación si la conexión falla.
        process.exit(1); 
    }
}

// Ejecuta la prueba de conexión inmediatamente
testDbConnection();

export default pool;
