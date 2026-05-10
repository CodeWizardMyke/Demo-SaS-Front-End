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
                
                <LoginAccount data={false}/> 

                :
                
                <CreateAccount/>

            }
       </main>
    );
}

export default Auth;
