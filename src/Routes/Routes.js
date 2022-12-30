import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Posts from "../Pages/Home/Posts/Posts";
import PostDetails from "../Pages/PostDetails/PostDetails";
import AllMedia from "../Pages/AllMedia/AllMedia";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <AllMedia></AllMedia>
            },
            {
                path: '/posts/:id',
                element: <PostDetails></PostDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);