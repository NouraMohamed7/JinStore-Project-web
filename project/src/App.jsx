import React from "react";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductDashboard from "./dashboards/ProductDashboard/ProductDashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/productdetails",
          element: <ProductDetails/>,
        },
        {
          path: "/productdashboard",
          element: <ProductDashboard/>,
        },
      ],
    },
  ]);
  return <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  
}

export default App;
