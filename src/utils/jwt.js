import jwt from "jsonwebtoken";


import { configurations } from "../config/env.js";

// Expires in 7days
export const signToken = (payload) => {
    return jwt.sign(payload, configurations.JWT_SECRET, {
        expiresIn: configurations.JWT_EXPIRES || '1h'
    });
}
export const verifyToken = (token) => {
    return jwt.verify(token, configurations.JWT_SECRET);
}

