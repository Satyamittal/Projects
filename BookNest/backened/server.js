import { connectToMongodb } from "./a-databaseConfig/mongodb.js";
import { connectUsingMongoose } from "./a-databaseConfig/mongoose.js";

import { server } from "./e-modules/index.js";
import * as iModules from './e-modules/internal-modules.js' ;
import * as cModules from './e-modules/core-modules.js' ;

// Error handling Middleware
server.use((err,req,res,next)=>
{
    // Application Error ( from user )
    if(err instanceof iModules.ApplicationError)
    {
        return res.status(err.code).send(err.message) ;
    }
    
    iModules.logger(err) ;

    // server errors
    let absolutePath = cModules.path.join(process.cwd() ,'b-public','static' ,'error.html') ;
    res.status(200).sendFile(absolutePath) ;
});


// How to call application level error ?
// throw new ApplicationError('User not found',400);

server.listen(3100, ()=>
{
    console.log("server is listening on port 3100") ;
    connectToMongodb();
    // connectUsingMongoose();
})
