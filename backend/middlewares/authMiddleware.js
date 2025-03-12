import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config.js";


export const auth = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1]

        const decodedToken = await jwt.verify(token, JWT_SECRET)

        const user = await decodedToken

        req.user = user

        next()
    } catch (error) {
        return res.status(401).send({
            error: "unauthentificated"
        })
    }
}