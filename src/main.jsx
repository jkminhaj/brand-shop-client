import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import ErrorPage from './components/ErrorPage';
import AddProduct from './components/AddProduct';
import PrivateRoute from '../PrivateRoute';
import Brand from './components/home components/Brand';
import BrandDetails from './components/home components/BrandDetails';
import ProductCardDetails from './components/home components/ProductCardDetails';
import UpdateProduct from './components/home components/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/brand/:brandName',
        element:<BrandDetails></BrandDetails>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.brandName}`)
        
      },
      {
        path:'/productcarddetails/:id',
        element:<ProductCardDetails></ProductCardDetails>,
        loader:({params})=>fetch(`http://localhost:5000/productid/${params.id}`)
      },
      {
        path:'/updateproduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/productid/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
