import { SignIn } from './components_pages/c-3-Sign_In/signIn.jsx';
import { SignUp } from './components_pages/c-4-Sign_Up/signUp.jsx';
import { BookCard } from './components_pages/c-5-book_card/bookCard.jsx';
// import { Comp } from './components_pages/c-1-comp_name/comp_name.js'
import { Notavail } from './components_pages/c-6-not_avail/notAvail.jsx';

// For Routing
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom';


function App() {

  // 1. Defining & create router 
  const router = createBrowserRouter([
    {path:'/',element: <SignIn></SignIn>},
    {path:'/signUp',element: <SignUp></SignUp>},
    {path:'/notAvailable',element: <Notavail></Notavail>}
  ]);


  return (
    <>
    {/* 2. Provide router : This should be the only thing here..*/}
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
