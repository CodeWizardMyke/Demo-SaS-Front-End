import React from 'react';

import { RouterProvider } from 'react-router-dom';
import {Providers} from './providers';
import {router} from './routes';

import '../styles/index.css'

export default function App  () {

    return (
       <Providers>
            <RouterProvider router={router} />
       </Providers>
    );
}
;
