import db from "../config/db.js";

export const createUser = async(data) => {
    const {name, email, password} = data;
    const [result] = await db.query(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, password]
    );
    return result;
}

export const findUserByEmail = async(email) => {
    const [rows] = await db.query(
        `SELECT * FROM users WHERE email = ?`,[email]
    );
    return rows[0];
}












