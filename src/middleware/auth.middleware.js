import { verifyToken } from "../utils/jwt.js";
import { ApiError } from "../utils/apiError.js";
import { findUserById } from "../models/user.model.js";

export const protect = async(req, res, next) => {
    try {
        const headers = req.headers.authorization || undefined;

        if (!headers || !headers.startsWith("Bearer ")) throw ApiError.unauthorized();

        const token = headers.split("")[1];
        const decoded = verifyToken(token);

        const user = await findUserById(decoded.id)

        if (!user) throw ApiError.unauthorized();

        req.user = user;
        next();

    } catch (error) {
        next(error);
    }
}

