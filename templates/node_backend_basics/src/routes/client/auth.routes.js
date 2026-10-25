import express from 'express';
import { register } from '../../controllers/index.js';
const router = express.Router();


/**
 * 
 * make the auth routes here  
 * 
 */

router.post("/register" , register);


export default router;