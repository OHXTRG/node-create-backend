import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

const file = import.meta.url;
const filePath = path.dirname(fileURLToPath(file));
const projectRoot = path.resolve(filePath , "..");

const NODE_ENV = process.env.NODE_ENV || "development";


dotenv.config({
    path : path.join(projectRoot , `.env.${NODE_ENV}`)
})
