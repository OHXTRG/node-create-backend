import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path'
import errorHandler from './middlewares/errorHandlerMiddleware.js';
import routes from './routes/index.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(dirname, "..") ;



const app = express();

// request pasers 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// middlewares 



// public routes 
app.use(express.static(path.join(projectRoot,"publics")));
app.use(express.static(path.join(projectRoot,"uploads")));


//routes 
app.use("/api",routes);


// error 
app.use(errorHandler);


export default app;


