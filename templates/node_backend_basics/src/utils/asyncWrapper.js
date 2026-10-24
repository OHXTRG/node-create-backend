

const asyncWrapper = (fn)=>{
    return async(req, res , next)=>{
        try{
            await fn(req, res ,next);
        }catch(error){
            console.log(error,"error catch in async wrapper");
            next(error);
        }
    }
}


export default asyncWrapper;