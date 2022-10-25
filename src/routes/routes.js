import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import CourseTutorials from "../components/CourseTutorials/CourseTutorials";
import Tutorials from "../components/Tutorials/Tutorials";
import CardDetails from "../components/CardDetails/CardDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";




export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Tutorials></Tutorials>,
                loader :()=> fetch(`http://localhost:5000/tutorials`)
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
                path:'/category/:id',
                element:<CourseTutorials></CourseTutorials>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },

          
            {
                path:'/details/:id',
                element:<CardDetails></CardDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/tutorials/${params.id}`)
            },

           


        ]
    }
])