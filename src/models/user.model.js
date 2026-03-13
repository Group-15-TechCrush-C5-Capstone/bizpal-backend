import db from "../config/db.js";

export class User{
    static async createUser(data) {
        try{
            const {name, email, password} = data;
            await db.query(
                `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
                [name, email, password]
            );
            return data;
        } catch (error) {
            // return error;
        }
    }   
}

