import jwt from "jsonwebtoken";

import { configurations } from "../config/env.js";

export const signToken = (payload) => {
    jwt.sign(payload, configurations.JWT_SECRET, {
        expiresIn: configurations.JWT_EXPIRES_IN
    });
}

export const verifyToken = (token) => {
    jwt.verify(token, configurations.JWT_SECRET);
}
