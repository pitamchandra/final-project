import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Shop from "../Pages/Dashboard/Shop";
import Private from "../Private/Private";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

      ]
    },
    {
      path: 'dashboard',
      element: <Private><Dashboard></Dashboard></Private>,
      children: [
        {
          path: 'dashboard/cart',
          element: <Cart></Cart>
        },
        {
          path: 'dashboard/shop',
          element: <Shop></Shop>
        },
        {
          path: 'dashboard/users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);