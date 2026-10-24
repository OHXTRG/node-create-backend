export class CustomError extends Error{
    constructor(code , message){
        super();
        this.code = code ;
        this.message = message;    
    }
}


const createCustomError = (code , message)=>{
    return new CustomError(code , message);
}

export default createCustomError;