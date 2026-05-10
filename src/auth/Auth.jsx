import React, { useState } from 'react';

import './Auth.css'
import LoginAccount from './components/LoginAccount';
import CreateAccount from './components/CreateAccount';

const Auth = () => {
    const [existisAcc,setExistisAcc] = useState(true);

    return (
       <main className='Auth'>
            {
                existisAcc ? 
                
                <LoginAccount /> 

                :
                
                <CreateAccount/>

            }
       </main>
    );
}

export default Auth;
