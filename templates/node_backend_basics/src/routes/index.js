import express from 'express';
import clientRoutes from './client/index.js'

const router = express.Router();

router.get("health-check",(req ,res )=>{
    res.status(203).json({
        success : true
    })
})

/* connect all the routes here  
eg..

router.use(clientAppRoute);

router.use(adminAppRoute);
*/

router.use("/client",  clientRoutes);


export default router;


