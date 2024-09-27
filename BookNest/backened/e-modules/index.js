// 1. Import core modules
import * as cModules from './core-modules.js';

// 3. Import External modules
import * as eModules from './external-modules.js'

// 2. Import internal modules
import * as iModules from './internal-modules.js' ;

// call global middlewares
// server.use(first,second,third,express.static(staticFilePath))

// Request at home route of server

/* 1. HTTP Server

export const server = cModules.http.createServer((req,res)=>
{
    if(req.method == 'GET')
    {
        if(req.url == '/') { res.end('Hello') }
        else if(req.url == '/home') { res.end('Namaskar') } 
    }
    else if(req.method == "POST")
    {
        let body = "" ;
        
        //  New data is available
        req.on("data",(chunk)=> body += chunk.toString() ) ;

        // All data is recieved
        req.on("end" ,()=>
        {
            res.write("All data is recieved: ");
            res.end(body) ;
        })
    }
})

*/

/* 2. File System operation

const content =
{
    "name":"Satyam Mittal",
    "age":21 
}

// 'sync' operation
iModules.operateFile('read','data.txt');                           // read
iModules.operateFile('write','data.txt',content) ;                 // write
iModules.operateFile('append','data.txt',content) ;                // append 
iModules.operateFile('delete','data.txt')                          // delete

// 'async' operation
iModules.operateFile('read','data.txt',null,'async') ;              // read
iModules.operateFile('write','data.txt',content,'async');           // write
iModules.operateFile('append','data.txt',content,'async') ;        // append
iModules.operateFile('delete','data.txt',null,'async') ;            // delete

*/

/* 3. Send Email to user

//2. Configure email content
const mailOptions = 
{
    from: 'satyam7696@gmail.com',
    to: 'coder7696@gmail.com',
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in NodeJS',
};

iModules.sendMail(mailOptions);

*/

/* 4. Path Module 

// path from mentioned directory
const filePath = cModules.path.join('src','home','data.txt') ;

// path from root directory
const resolvedPath = cModules.path.resolve('src','home','data.txt') ;

// Extension of file
const extOfPath = cModules.path.extname(filePath);

console.log(cModules.path.resolve()) ; // gives path of current executing directory

- Instead of using hard-coded paths , use these filePaths 

*/

/* 5. Readline module

const interfaceq = cModules.readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

interfaceq.question("Who is prime minister of INDIA ? " ,(ans1)=>{
    // First You have to answer the question ?
    
    {
        // Do some task here , This will be executed as soon as we type ans1  
        console.log("Answer: Narendra Modi\n");
        console.log("Now , my second question\n");
    }
    // From here , we can start chain of callbacks...
    interfaceq.question("Who is President of USA ?", (ans2)=>{

        // Answer here
        {
            console.log("Answer: Joe Biden") ;
            interfaceq.close() ;
        }
    })
});

*/

/* 6. Express Server


*/

export const server = eModules.express() ;

server.set('view engine', 'ejs');
server.set('views', cModules.path.join(cModules.path.resolve(), 'b-public/dynamic'));

/*
- Call Global middlewares here

// How ? req.session.userEmail = email ;
1. Cross origin resource sharing. Generally devices are not allowed to share information from one server to another server.
This is not allowed such that any random person cannot have access to our API's
To allow we have to use CORS. If we dont put corsOptions object then by default it allowed all users.

2. To parse the data. This function made by me ,automatically fetches data from whatever the header will be.
3. Same identification could be done using cookie directly.
4. This attach an extra object to request called as session. Used for identifying the user.
5. For fixing the layout of view
6. Path of static files set. This middleware by default serves index.html directly inside static folder even if, you dont specify the path in route.
*/


var corsOptions = {
    origin: true,  // Allow all origins
    allowedHeaders: '*',  // Allow all headers
}

let staticFolder = cModules.path.join(process.cwd(),'b-public' ,'static') ;

const globalMiddlewares = [
    eModules.cors(corsOptions),        // CORS should come early to handle preflight requests
    iModules.parser,                   // Body parser for handling JSON and URL-encoded data
    eModules.cookieParser(),           // Cookie parser for managing cookies
    eModules.session({                 // Session management middleware
        secret: 'Secret-Key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }),
    eModules.ejsLayouts,               // EJS Layouts middleware for views
    eModules.express.static(staticFolder),  // Serve static files
];
server.use(globalMiddlewares) ;

// Make local middleware arrays here 
// const midllemanArray = [local1,local2,local3]

// call routes
server.use('/index',iModules.homeRouter) ;
// server.use('/api/users', iModules.userRouter) ;

/*

- we can also use directly controller functions or call using arrow functions

server.get('/ , controller_function)
or 
server.get('/,(req,res,next)=>
{

});
*/


