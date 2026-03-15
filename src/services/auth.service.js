import { createUser, findUserByEmail, updateLastLogin} from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { sendSuccess } from "../utils/apiResponse.js";
import { signToken } from "../utils/jwt.js";

// REGISTER USER
export const registerUser = async(data) => {
    if (await findUserByEmail(data.email)) throw ApiError.badRequest("User exists");

    // Token generated
    // const verifyToken = crypto.randomBytes(32).toString("hex");

    // Token expires in 24hrs - Work on it later
    const verifyTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)

    const user = await createUser({
        ...data, 
        verifyToken,
        verifyTokenExpires
    });

    return user;
}

// LOG IN USER
export const loginUser = async(data) => {
    try{
        const {email, password} = data;
        const user = await findUserByEmail(email);

        if (!user || !await bcrypt.compare(password, user.password)) {
           throw ApiError.badRequest("Invalid credentials");
        }
        updateLastLogin(user.id);

        const token = signToken({id: user.id})

        return {
            token,
            user:  {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        };
    } catch (error) {
        throw error;
    }
}    
