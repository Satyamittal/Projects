// All controller functions of particular feature here
import {products} from '../../b-dataArrays/product.array.js'

import * as cModules from '../../e-modules/core-modules.js';

export class HomeController
{
    constructor() { }

    // prototype functions
    homePageServe = (req,res,next) => 
    {
        console.log('i am here') ;
        // To serve static files we have to specify root parameter
        let absolutePath = cModules.path.join(process.cwd() ,'b-public','static' ,'staticP.html') ;

        res.status(200).sendFile(absolutePath) ;
    } 
    dynamicPageServe = (req,res,next) =>
    {
        // Name of the view & data sent to views
        res.render('product', {products: products}) ;
    }
    dynamicPageServe2 = (req,res,next) =>
    {
        const {id} = req.params ;
        res.send('ID you write is ' + id) ;
    }
    static orderIN(req,res,next){
        
    }
};