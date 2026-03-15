import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});


// export const findUserByEmail = async(email) => {
//     const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
//     return rows[0];
// }

try {
  const connetion = await pool.getConnection();
  console.log("Database connected Sucessfully")

  const email = "nath@n.com";

  // console.log(await findUserByEmail(email))
  connetion.release();
} catch (error) {
  console.log("Databse Connection Failed:", error.message)
}

export default pool;


