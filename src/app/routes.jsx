import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../routes/PrivateRoute';
import CreateProduct from '../pages/products/CreateProduct';
import UpdateProduct from '../pages/products/UpdateProduct';
import DeleteProduct from '../pages/products/DeleteProduct';
import Overview from 'pages/overview/overview';
import DashboardProducts from 'pages/dashboard/DashboardProducts';
import CreateCategories from 'pages/categories/CreateCategories';
import UpdateCategories from 'pages/categories/UpdateCategories';
import DeleteCategories from 'pages/categories/DeleteCategories';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<AuthLayout/>
    },
    {
        path:'/app',
        element: <PrivateRoute />,
        children:[
            {index:true, element: <Overview/> },
            
            {path:"dashboard/products",element:<DashboardProducts/>},

            {path:"products/create",element:<CreateProduct/>},
            {path:"products/update",element:<UpdateProduct/>},
            {path:"products/delete",element:<DeleteProduct/>},

            {path:"categories/create",element:<CreateCategories/>},
            {path:"categories/update",element:<UpdateCategories/>},
            {path:"categories/delete",element:<DeleteCategories/>},
        ]
    }
]);
