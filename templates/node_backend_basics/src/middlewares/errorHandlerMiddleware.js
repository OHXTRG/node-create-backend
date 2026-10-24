import { CustomError } from "../utils/createCustomError.js";


const errorHandler = (err , req , res , next)=>{
    if(err instanceof CustomError){
        return res.status(err.code).json({
        success : false,
        message: err.message
    })
    }else{
        return res.status(500).json({
            success :false,
            message : "internal server error"
        })
    }
}

export default errorHandler