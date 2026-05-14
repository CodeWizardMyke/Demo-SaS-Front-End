import React, { useContext, useEffect, useState } from 'react';
import { loginRequest } from '../../services/authService';
import {  useNavigate } from 'react-router-dom';
import { checkStoredAuth } from '../../utils/checkStoredAuth';
import { AuthContext } from '../../contexts/AuthContext';

const LoginAccount = () => {
    const [erros,setErrors] = useState([]);
    const [saveUser,setSaveUser] = useState(false);

    const navigate = useNavigate();
    const {setUser,setToken} = useContext(AuthContext);

    async function submitForm (event){
        event.preventDefault();

        const payload = new FormData(event.target);

        const {data,error} = await loginRequest(payload, saveUser);

        if(error !== null){
            setErrors(error.data);
            return false;
        }
    
        setUser(data.user);
        setToken(data.token);

        navigate('/app')
    };

    useEffect(()=>{
        const chekedAuth = checkStoredAuth();

        if(chekedAuth.userAuth){

            setUser(chekedAuth.user);
            setToken(chekedAuth.token);

            return navigate('/app')
        };
    },[navigate,setToken,setUser])

    return (
        <form 
            className="contentAuth"
            onSubmit={submitForm}
        >
            <h2>Login</h2>

            <div className="resolveRequest">
                {
                    erros.map((err,index) => <span key={"err_"+index}>{ `${err.msg}` }</span>)
                }
            </div>

            <div className="contentFieldsAuth">
                <div className="userEmail">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" defaultValue={'demo@demo.com'}/>
                </div>
                <div className="userPassword">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" defaultValue={'demo@123'} />
                </div>
                <div className='checkBox'>
                    <label htmlFor="saveAuth">Manter logado</label>
                    <input 
                        type="checkbox" 
                        id="saveAuth" 
                        onChange={()=> setSaveUser(!saveUser)}
                    />
                </div>
            </div>
            <div className='contentBtnSubmit'>
                <button type="submit">Entrar</button>
            </div>
        </form>
    );

}

export default LoginAccount;
