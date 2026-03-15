import dotenv from "dotenv"

dotenv.config();


export const configurations = {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
}


