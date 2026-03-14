import { createUser, findUserByEmail } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";


export const registerUser = async(data) => {
    if (await findUserByEmail(data.email)) throw ApiError.badRequest("User exists");

    const user = await createUser(data);
    return user;
}
  
