import { createUser, findUserByEmail} from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { sendSuccess } from "../utils/apiResponse.js";


export const registerUser = async(data) => {
    if (await findUserByEmail(data.email)) throw ApiError.badRequest("User exists");

    // Token generated
    const verifyToken = crypto.randomBytes(32).toString("hex");

    // Token expires in 24hrs - Work on it later
    const verifyTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)

    const user = await createUser({
        ...data, 
        verifyToken,
        verifyTokenExpires
    });

    return user;
}

export const loginUser = async(data) => {
    const {email, password} = data;
    try{
        const user = await findUserByEmail(email);

        if (!user) {
           console.log(email + " is not found")
           return null 
        }
        console.log(user + "found")
        return user;
    } catch (error) {
        throw error;
    }
}    
