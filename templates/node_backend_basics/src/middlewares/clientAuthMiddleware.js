import asyncWrapper from "../utils/asyncWrapper.js"
import createCustomError from "../utils/createCustomError.js";
import jwt from 'jsonwebtoken'

const authenticate = ()=>{
    return [
        asyncWrapper((req , res , next)=>{
            const authorizationToken = req.headers.authorization;

            if(!authorizationToken) next(createCustomError(401,"Unauthorize"))

            const token = authorizationToken.split(" ")[1];


            // validate token
            const data = jwt.verify(token , process.env.JWT_SECRET_CLIENT)

            next(createCustomError(401,"Unauthorize"));


            next();
        })
    ]
}


export default authenticate;