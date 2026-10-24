import express from 'express';


const router = express.Router();


router.get("/health-check", (req , res )=>{
    console.log('in the req')
    return res.status(203).json({
        success : true
    })
})

/**
 * 
 * mount all the client routes here 
 * 
 */




export default router;