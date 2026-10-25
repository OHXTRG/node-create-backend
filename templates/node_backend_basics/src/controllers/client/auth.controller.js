import asyncWrapper from "../../utils/asyncWrapper.js";
import createCustomError from "../../utils/createCustomError.js";
import { errorLogger , infoLogger , warnLogger } from "../../logger/logger.js";

export const register  = asyncWrapper((req, res , next)=>{
    // register user 



    infoLogger(`This is sample text for testing file size, file reading, and byte handling in Node.js. The purpose of this content is to help understand how files are read, how data is stored in buffers, and how a program can limit the amount of data it processes. When a file contains more bytes than the allowed limit, the program can preserve the last portion of the file by selecting a buffer slice from the end. This example is plain text and can be repeated multiple times to create a larger test file.

Node.js provides built-in modules for working with files. The file system module can read and write files, while the Buffer class represents binary data. The byte length of a string may differ from its character count because characters can use different numbers of bytes in UTF-8 encoding. Always measure the actual byte length when working with file size limits.

This is sample text for testing file size, file reading, and byte handling in Node.js. The purpose of this content is to help understand how files are read, how data is stored in buffers, and how a program can limit the amount of data it processes. When a file contains more bytes than the allowed limit, the program can preserve the last portion of the file by selecting a buffer slice from the end. This example is plain text and can be repeated multiple times to create a larger test file.`)


    return res.status(200).json({
        success : true,
        message : "user registered"
    })
})