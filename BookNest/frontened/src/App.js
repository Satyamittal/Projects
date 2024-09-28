// For Routing
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom';

// Pages are imported
import { PageOne } from './components_pages/p-1-sign_in/signIn.page.jsx';
import { PageTwo } from './components_pages/p-2-Sign_up/signUp.page.jsx';
import { PageThree } from './components_pages/p-3-buyer_page/buyer.page.jsx';
import { PageFour } from './components_pages/p-4-Not_avail/notAvail.page.jsx';


function App() {

  // 1. Defining & create router 
  const router = createBrowserRouter([
    {path:'/',element: <PageOne></PageOne>},
    {path:'/signUp',element: <PageTwo></PageTwo>},
  ]);


  return (
    <>
    {/* 2. Provide router : This should be the only thing here..*/}
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
