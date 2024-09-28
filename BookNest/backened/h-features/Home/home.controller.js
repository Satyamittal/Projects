// All controller functions of particular feature here
import {products} from '../../b-dataArrays/product.array.js'
import {users as usersArray} from '../../b-dataArrays/user.Array.js'
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
    verifyUser = (req,res,next)=> 
    {
        const {email,password} = req.body ;
        const user = usersArray.find(user => user.email === email && user.password === password);
        res.json({ message: (user == undefined) ? "user not exists" : "user exists" ,response : user });
    }
    addUser = (req,res,next) =>
    {
        const {name,email,password,rto,phone} = req.body ;
        const size = usersArray.length ;
        const newUser = {
            id: size+ 1,
            name: name,
            email: email,
            password: password,
            rto: rto,
            phone: phone,
        };

        usersArray.push(newUser); 
        res.json({ message: "User added successfully", response: newUser });
    }
    addBook = (req,res,next) =>
    {
        // find user with email
        const user = usersArray.find(user => user.email === email);

        // add book in his books array.
        const {name,publication, year, price, img} = req.body ;
        const newBook = 
        {
            name: name ,
            publication: publication ,
            year: year ,
            price: price ,
            img: img
        }
        user.books.push(newBook) ;
        res.json({ message: "Book added successfully", response: newBook });
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