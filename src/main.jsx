import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './rotes/Root';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Authprovider from './providers/Authprovider';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Errorpage from './Components/ErrorPage/Errorpage';
import PrivateRoute from './privateRoute/PrivateRoute';
import Pricing from './Components/Pricing/Pricing';
import Process from './Components/Process/Process';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('../public/services.json')
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>
      },
      {
        path: "/process",
        element: <Process></Process>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
