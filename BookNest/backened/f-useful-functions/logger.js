import * as iModules from '../e-modules/internal-modules.js' ;

async function log(err)
{
    // attach a date & time with data
    const stackLines = err.stack.split('\n').map(line => line.trim());

    const error =
    {
        "Date" : new Date().toLocaleString() ,
        "error": stackLines[0] ,
        "error-path": stackLines[1] ,
        "calling-path": stackLines[2],
        "error-code": err.code
    }

    try
    {
        await iModules.operateFile('append','b-loggedData/errors.txt',error,'async') ;        
    }
    catch(err)
    {
        throw new iModules.ApplicationError("error-message" , 400) ;
    }
}

export const logger = async(data) =>
{
    await log(data) ;
}
