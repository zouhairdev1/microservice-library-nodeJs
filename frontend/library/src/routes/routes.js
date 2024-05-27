import Layout from "../layouts/Layout";
import LayoutConnexion from "../layouts/LayoutConnexion";
import BookDetails from "../pages/BookDetails";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";

const { createBrowserRouter } = require("react-router-dom");

const routes =createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
          {
          path: "/Explore",
          element: <Explore/>,
        
        }
    
      ,
          {
          path: "/BookDetails",
          element: <BookDetails/>,
        
        }
      ],
    },
    {
      element:<LayoutConnexion/>,
      children:[
        {
          path: "/Login",
          element: <Login/>,
        },]}
        /*
        {
          path: "/signup",
          element:<SignUp/>,
        },
        
      ]
    }*/
  ])
  export default routes;