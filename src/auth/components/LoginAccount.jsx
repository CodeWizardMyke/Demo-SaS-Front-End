import React, { useEffect, useState } from 'react';
import { loginRequest } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { checkStoredAuth } from '../../utils/checkStoredAuth';
import { setStorageItems } from '../../utils/setStorageItems';

const LoginAccount = () => {
    const [erros,setErrors] = useState([]);
    const [saveUser,setSaveUser] = useState(true);

    const navigate = useNavigate();

    async function submitForm (event){
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const data = await loginRequest(formData) ;

            if(saveUser){
                setStorageItems(data, "local");
            }else{
                setStorageItems(data);
            }
           
            return navigate('/app')
        } catch (error) {

            console.log(error.response);

            setErrors(error.response.data.errors);
        }
    }

    useEffect(()=>{

        const {userAuth} = checkStoredAuth();

        if(userAuth){
            return navigate('/app');
        }
    
    },[navigate])

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
                    <input type="text" name="email" id="email" value={'demo@demo.com'}/>
                </div>
                <div className="userPassword">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={'demo@123'}/>
                </div>
                <div className='checkBox'>
                    <label htmlFor="saveAuth">Manter logado</label>
                    <input 
                        type="checkbox" 
                        id="saveAuth" 
                        onChange={(e)=> setSaveUser(e.target.value)}    
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
