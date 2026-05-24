import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../routes/PrivateRoute';
import Products from '../modules/Products';
import CreateProduct from '../pages/products/CreateProduct';
import UpdateProduct from '../pages/products/UpdateProduct';
import DeleteProduct from '../pages/products/DeleteProduct';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<AuthLayout/>
    },
    {
        path:'/app',
        element: <PrivateRoute />,
        children:[
            {path:"products",element:<Products/>},
            {path:"products/create",element:<CreateProduct/>},
            {path:"products/update",element:<UpdateProduct/>},
            {path:"products/delete",element:<DeleteProduct/>},
        ]
    }
]);
