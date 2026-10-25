import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'


const file = import.meta.url;
const filePath = path.dirname(fileURLToPath(file));
const projectRoot = path.resolve(filePath, "..", "..");
// const LOGFILE_LIMIT = 5 * 1024 * 1024;
const LOGFILE_LIMIT = 1024 * 5 ;

console.log(projectRoot, "project root in logger file");



const log = (type, { message, error }) => {

    const filePath = path.join(projectRoot, "logs", `${type}.log`);
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "");

    writeLog(filePath, type, { message, error });
    const fileBuffer = fs.readFileSync(filePath);

    const fixedBuffer = fileBuffer.length > LOGFILE_LIMIT ? fileBuffer.subarray(fileBuffer.length - LOGFILE_LIMIT) : fileBuffer;

    if (fileBuffer.length > LOGFILE_LIMIT) {
        const tempFilePath = path.join(projectRoot, "logs", `temp${type}.log`);
        fs.writeFileSync(tempFilePath, fixedBuffer);
        fs.unlinkSync(filePath)
        fs.renameSync(tempFilePath, filePath);
    }
    return;
}

const writeLog = (filePath, type, data) => {
    const date = new Date();
    const text = `${type}\ndate: ${date.toDateString()} ${date.toTimeString()}\nMessage : ${data.message}\n`;
    if (data.error) {
        text += `name : ${error.name}\n`;
        text += `message : ${error.message}\n`
        text += `Stack Trace : ${error.stack}\n\n\n`
    }
    fs.writeFileSync(filePath, text)
}


export const errorLogger = (message, error) => {
    return log("error", { message, error });
}


export const warnLogger = (message) => {
    return log("warn", { message });
}

export const infoLogger = (message) => {
    return log("info", { message });
}