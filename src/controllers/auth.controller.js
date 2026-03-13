import { User } from "../models/user.model.js"

export const register = async (req, res) => {
    const user = await User.createUser(req.body);
    user ? res.json({sucess: true, message: "User created sucessfully", user})
    : res.json({success: false, message: "Error creating user or User already exists"})
}

export const login = async(req, res) => {

};

export const profile = async() => {};
export const forgotPassword = async() => {};
export const resetPassword = async() => {};
