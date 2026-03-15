import db from "../config/db.js"

export async function findUserByEmail(email) {
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.query(query, [email]);
    return rows[0];
}