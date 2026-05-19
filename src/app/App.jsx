import React from 'react';

import { RouterProvider } from 'react-router-dom';
import {Providers} from './providers';
import {router} from './routes';

import '../styles/index.css';
import '../styles/variabels.css';

export default function App  () {

    return (
       <Providers>
            <RouterProvider router={router} />
       </Providers>
    );
}
;
