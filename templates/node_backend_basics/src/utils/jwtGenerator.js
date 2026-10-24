import "../env.js"
import crypto from 'crypto';
import jwt from 'jsonwebtoken'


const generateJWTSecret = ()=>{
    return crypto.randomBytes(32).toString('hex');
}


const generateJwtToken = ( data)=>{
        return  jwt.sign(data,process.env.JWT_SECRET_CLIENT);
}

