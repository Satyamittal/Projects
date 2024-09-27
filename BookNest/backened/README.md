## `Theory`

- #### To understand the basics of technology used to write the code [NodeJs](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/NodeJs.md)
- #### How we import files & modules are mentioned here [Modules](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/Modules.md).
- #### When we clone project from Github repo. It may be of different version. To manage versions [NVM](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/nvm.md)
- #### Details of packages that used in current project are mentioned in [Package.json](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/Package.json.md)

<hr/>

## `Setting up Environment`

#### `1. `Start the project & do the necessary paperwork.
```bash
npm init
```
#### `2. ` Install the package [backflow](https://github.com/Satyamittal/Notes/tree/master/Publishing%20npm%20package). Which contains folder structure & necessary templates  & functions.
```bash
npm i backflow
```
#### `3. ` After downloading , use `ES-6 syntax`. So, set `"type":"module"` in package.json.

#### `4. ` Cut the readME file from node_modules & make a .gitignore file.

<hr/>

### `Patterns in Web development`

- #### `1. MVC architecture` 
#### It is a model view controller architecture. In which models handles data , views shows data , & controller handles requests.
- #### Initialize project & make a server
```bash
npm init
npm i express
```
- #### Set path of views , view engine , layout for views. Views files have extension `.ejs`.
```bash
npm i ejs
server.set('view engine', 'ejs') ;
server.set('views' ,path) ;
server.use(ejsLayouts) ;
server.use(express.static('public')) ;
```
- #### Now , you have to make models & controllers, inside features folder.
- #### To use the controller functions in GET, POST or other requests. We have to use the instance of the class ( if function is `not static`)
- #### Inside controller functions , we use model functions to do `CRUD` operations on data.
- #### One type of feature may have multiple functions inside controller . To avoid mess in single `index.js` file . We can use `route.js` file to place all requests there.
- #### If controller is using `this keyword` inside constructor , then we cannot call function of controller directly instead we have to use `arrow function`.
```js
router.post('/signin',(req,res)=>
{
    userController.signIn(req,res) ;
}) ;
```
- #### Make [validatation](./d-middlewares/validator.middleware.js) & [uploading middlewares](./d-middlewares/upload.middleware.js).
- #### Securing application using session & cookies as middlewares.
```bash
# How these work actually ?

- ### When user sent the another request to server. Server dont know that it is the same user. 
- #### So , what server does is they make a session-id & sent back to user in cookies.
- #### When user sent another request , this session-id is automatically fetched from cookies

package used = npm i express-session
```

<hr/>

- #### `2. RESTful API`
    - #### Use try catch block to catch(err) errors
```js
try{}
catch(err)
{
throw new ApplicationError('error-message' , code) ;
}
```
- #### `3. Micro-services architecture`

<hr/>



### `# Understanding this package`

- #### `1. ` Use of each & every folder is listed here.
    - #### [a-databaseConfig](./a-databaseConfig/) This contains files that makes connection with database .
    - #### [b-loggedData](./b-loggedData/) This contains files that are logged in server.
    - #### [b-public](./b-public/)  This contains static & dynamic files that server will serve as per request from user.
    - #### [c-uploads](./c-uploads/) This contains all the files that are stored on server , that user uploads on network.
    - #### [d-middlewares](./d-middlewares/) This folder contains middlewares that does the work of processinig requests before they came to server.
    - #### [`e-modules`](./e-modules/) Most important folder which contains all modules used in the application.
    - #### [f-useful-functions](./f-useful-functions/) This folder contains functions that I made , which makes the task easy to do.
    - #### [g-events](./g-events/) Nothing just notes of events.
    - #### [`h-features`](./h-features/) This folder will be different for each application as per the task.

- #### `3. ` Each folder contains files that you can use as examples to know . How to write code ?

<hr/>

### ` # Create Project`

- #### `5. ` Go on [index.js](./e-modules/index.js) & read it.
    - #### First you have to make a server.
    - #### Then you have to make a folder for dynamic files(views) & static files and give them path like [`views`](./b-public/dynamic/) & for [static](./b-public/static/).
    - #### Now to embedd javascript variables in views & for common templating of views. Use `view engine & ejsLayouts`.[`layout.ejs`](./b-public/dynamic/layout.ejs).

<hr/>

- #### `Views` these are dynamic files like HTML , that serves dynamic content based on user request. Extension used is `.ejs`.

- #### Forms are also metioned in [`layout.ejs`](./b-public/dynamic/layout.ejs) , Default `enctype` for form is urlencoded . But we can modify it to use `multipart/form-data` for files.

- #### Every data that is sent is recieved in `req.body`. But if data is multipart than it is recieved in `req.file`.

<hr/>

- #### Now you can make controllers , models & views and thats it.

<hr/>

- #### `Last step`You can delete the unnecessary folders & modules in the end.

<hr/>


<hr/>

### `Start Server`

- #### `4. ` [Server.js](./server.js) This is the file that ultimately runs.
    - #### It is possible that there are lots of server on single machine. To connect with particular one , we need `port Number`.

    - #### Starts the server.
```bash
node server.js

# alternate
nodemon server.js
```

### `API Notes`

- #### We use `swagger` for this purpose.

<hr/>

### `Testing`

- #### Run the PostMan.
- #### Fill the `URL` & choose the request.
- #### Data can be sent in various formats in `req.body`.
    - #### `form-data` 
    ```js
    server.use(multer.any()) ;
    ```
    - #### form-urlencoded 
    ```js
    server.use(bodyParser.urlencoded({extended: true})) ;
    ```
- #### Data could be sent to server in `URL` in form of `params & query`
```js
<!-- Params -->
server.get('/dynamicRoute/:id',(req,res)=>
{
    const {id} = req.params ;
    res.send(id) ;
})

<!-- Query -->


```
<hr/>

### `React application`

- #### React does not directly does changes in DOM . But it makes a virtual DOM first.
- #### Then it compares virtual DOM with real DOM and paints only that nodes which changes.
- #### Components in react are made using `functional` or `class-based`.

#### `Component properties`

- #### Regular javascript function returnin jsx. JSX always enclosed in `() parenthesis`.
- #### Name starts with Capital letter.
- #### Instead class `className` is used.
- #### variables are enclosed in `{ }`.
- #### We cannot use `if-else` inside jsx. But we use `ternary operator or  || , && `. As condition is about uncertainity, it also consider as variable and enclose in parenthesis.
- #### In case of `&&` , if there are multiple conditions. this returns `first: falsy` part.
- #### In case of `||` , if there are multiple conditions. This returns `first: truthy` part.
- #### Only `0 , null , "" , undefined, false` consider as false . Everything is true other than these.
