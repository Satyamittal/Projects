// Import all internal modules here...

// Useful functions called here 
import { operateFile } from "../f-useful-functions/fs.js";
import { sendMail } from "../f-useful-functions/sendEmail.js";
import { callApi } from "../f-useful-functions/callApi.js";
import { viewer } from "../f-useful-functions/viewer.js";
import { logger } from "../f-useful-functions/logger.js";

// Middlewares called here
import { parser } from "../d-middlewares/parser.middleware.js";
import { uploader } from "../d-middlewares/upload.middleware.js";
import { basicAuthenticator } from "../d-middlewares/basicAuth.middleware.js";
import { authenticateCookie } from "../d-middlewares/cookieAuth.middleware.js";

// routers imported here
import { router as userRouter } from "../h-features/user/user.route.js";
import { router as homeRouter } from "../h-features/Home/home.route.js"

// Application errors
import { ApplicationError } from "../a-databaseConfig/error.js";
import * as cModules from './core-modules.js' ;


// Equivalent of __filename
const __filename = cModules.fileURLToPath(import.meta.url);

// Equivalent of __dirname
const __dirname = cModules.path.dirname(__filename);

// Export them here...
export 
{
    operateFile,
    sendMail,
    logger,
    parser,
    callApi,
    viewer,
    uploader ,
    basicAuthenticator,
    authenticateCookie,
    userRouter,
    homeRouter,
    
    ApplicationError,
    __dirname ,
}