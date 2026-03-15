import pool from "../config/db.js";
import bcrypt from "bcrypt"; 

export const createUser = async({name, email, password, phone, verifyToken, verifyTokenExpires}) => {

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt)

    const [result] = await pool.query(
        `INSERT INTO users (name, email, password, phone, verify_token, verify_token_expires) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, email, password, phone, verifyToken, verifyTokenExpires]
    );
    return result;
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    return rows[0];
}


export const findUserById = async(id) => {
    const [rows] = await pool.query(
        `SELECT id, name, email, phone, is_verified, created_at FROM users WHERE id = ?`, 
        [id]
    );
    return rows[0];
};











