import React, { useContext, useEffect, useState } from 'react';

import './Auth.css'
import FormUserAuth from './components/FormUserAuth';
import { AuthContext } from '../contexts/AuthContext';
import { createAccountRequest, loginRequest } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [authMode, setAuthMode] = useState("login");
    const [keepLogged,setKeepLogged] = useState(false);
    const [erros,setErrors] = useState([]);

    const navigate = useNavigate()

    const { isAuthenticated,setUser,setToken } = useContext(AuthContext);

    async function submitAuthRequest(payload) {
        if(authMode === "login"){
            return await loginRequest(payload, keepLogged);
        }else{
            return await createAccountRequest(payload, keepLogged);
        };
    };

    async function handleSubmitForm(event){
        event.preventDefault();
        const payload = new FormData(event.target);

        let { response , error } = await submitAuthRequest(payload);
        
        if(error !== null ){
            setErrors(error.data);
            return false;
        };

        setUser(response.data.user);
        setToken(response.data.token);
    };

    useEffect(()=>{  setErrors([]);  },[authMode])

    useEffect(() => {

        if(isAuthenticated){
            navigate('/app');
        }

    }, [isAuthenticated, navigate]);

    return (
       <main className='Auth'>

        <div className="pre-box" >

            <FormUserAuth 
                setAuthMode={setAuthMode} 
                authMode={authMode}
                setKeepLogged={setKeepLogged}
                keepLogged={keepLogged}
                erros={erros}
                submitForm={handleSubmitForm}
            />

            <div className="fixed-text">
                <h1>{ authMode === "create" ? "CADASTRO" : "LOGIN"}</h1>
            {
                authMode === "create"
                ?
                (
                    <p>
                        Crie sua conta para acessar a plataforma demo e experimentar as funcionalidades do sistema.
                        Os dados cadastrados são utilizados apenas para fins de demonstração, autenticação 
                        e organização básica das informações dentro da aplicação.
                    </p>
                )
                :
                    <p>
                        Faça login para acessar o ambiente demonstrativo da plataforma.
                        Este projeto foi desenvolvido como um experimento SaaS para portfólio, 
                        simulando processos reais de autenticação, gerenciamento de usuários e armazenamento de dados.
                    </p>
            }
            </div>
        </div>
                

       </main>
    );
}

export default Auth;
