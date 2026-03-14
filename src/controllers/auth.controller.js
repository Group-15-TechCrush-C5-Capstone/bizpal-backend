import { registerUser } from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const register = asyncHandler(async(req, res) => {
    const user = await registerUser(req.body);
    sendSuccess(res, {user: req.body}, "Registered Successfully", 201);
});

export const login = asyncHandler(async(req, res) => {
    
});

export const profile = async() => {};
export const forgotPassword = async() => {};
export const resetPassword = async() => {};
