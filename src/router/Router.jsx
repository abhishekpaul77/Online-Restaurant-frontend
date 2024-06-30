import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRoute from "../Private_Router/PrivateRoute";
import ProfileUpdate from "../pages/Profile Update/ProfileUpdate";
import CartPage from "../pages/shop/CartPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/menu",
            element: <Menu/>
        },
        {
          path:"/cart-page",
          element:<CartPage/>
        }
        ,
        {
          path:"/update-profile",
          element:<PrivateRoute><ProfileUpdate/></PrivateRoute>
        }
      ]
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ]);

  export default router;