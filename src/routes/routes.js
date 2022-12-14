import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";

import Tutorials from "../components/Tutorials/Tutorials";
import CardDetails from "../components/CardDetails/CardDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import FAQ from "../components/FAQ/FAQ";




export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Tutorials></Tutorials>,
                loader :()=> fetch(`https://learn-online-server.vercel.app/tutorials`)
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/register',
                element:<Register> </Register>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },

            {
                path:'/details/:id',
                element:<CardDetails></CardDetails>,
                loader: ({params})=> fetch(`https://learn-online-server.vercel.app/tutorials/${params.id}`)
            },

            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=> fetch(`https://learn-online-server.vercel.app/tutorials/${params.id}`)
            }
           


        ]

    },
    {
        path:'*',
        element:<h4 className="text-primary m-5 p-5">404 The Page is not Found</h4>
    }
])