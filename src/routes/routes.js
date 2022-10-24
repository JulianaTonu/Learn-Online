import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../components/CourseCategory/CourseCategory";
import Main from "../layout/Main";
import Home from './../components/Home/Home';
import Courses from './../components/Courses/Courses';



export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<CourseCategory></CourseCategory>
            },

            {
                path:'/courses/:id',
                element:<Courses></Courses>
            }

        ]
    }
])