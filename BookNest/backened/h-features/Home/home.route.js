// here routes are mentioned 

import { ApplicationError } from "../../a-databaseConfig/error.js";
import { express } from "../../e-modules/external-modules.js";
import { HomeController } from "./home.controller.js";

export const router = express.Router();

// create class to use non-static functions
const homeController = new HomeController() ;


try
{
    router.get('/',(req,res,next)=>
        {
            console.log('I am here ' );
            const err = {
                message : "Error in routing file" ,
                code : 404 
            }
            // nonExistentFunction();
            homeController.homePageServe(req,res,next) ;
        })
    router.get('/dynamo',(req,res,next)=>
    {
        homeController.dynamicPageServe(req,res,next) ;
    })
    router.get('/:id',(req,res,next)=>
    {
        homeController.dynamicPageServe2(req,res,next) ;
    })
}
catch(err)
{
    next(err) ;
}

// router.get('/',controllerFunction) 
/*

*/