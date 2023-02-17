import jwt from "jsonwebtoken"

export const createtoken = async(id, email, mobile, password) => {
    const token = await jwt.sign({
        id,
        email,
        mobile,
        password
    }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRESIN})
    return token;
}