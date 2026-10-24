import asyncWrapper from "../../utils/asyncWrapper";
import createCustomError from "../../utils/createCustomError";

const register  = asyncWrapper((req, res , next)=>{
    // register user 

    return res.status(200).json({
        success : true,
        message : "user registered"
    })
})