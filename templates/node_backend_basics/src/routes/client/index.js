import express from 'express';
import authRotues from "./auth.routes.js"
import authenticate from '../../middlewares/clientAuthMiddleware.js';

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

router.use("/",authRotues);

// router.use("/" , ...authenticate() , )



export default router;