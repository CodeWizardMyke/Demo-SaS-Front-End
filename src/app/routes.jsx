import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Auth from '../auth/Auth';
import PrivateRoute from '../routes/PrivateRoute';
import Products from '../modules/Products';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Auth/>
    },
    {
        path:'/app',
        element: <PrivateRoute />,
        children:[
            {path:"main",element:<Products/>}
        ]
    }
]);
