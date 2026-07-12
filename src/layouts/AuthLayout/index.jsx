import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createAccountRequest, loginRequest } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

import Loading from '../../components/loading/Loading';

import AuthText from 'components/auth/AuthText';

import './styles.css'

import Login from 'components/auth/Login';
import CreateAcc from 'components/auth/CreateAcc';
import { CgDarkMode } from 'react-icons/cg';
import ErrorPopup from 'components/Error/ErrorPopup';

const AuthLayout = () => {
    
    const {theme,toggleTheme} = useTheme()
    const [authMode, setAuthMode] = useState("create");
    const [keepLogged,setKeepLogged] = useState(false);
    
    const [fieldErrors,setFieldErrors] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);
    
    const navigate = useNavigate()

    useEffect(()=>{  setFieldErrors([]); setErrorMessage(null); },[authMode]);
    const { 
        isAuthenticated,
        setUser,setToken, 
        loading,setLoading 

    } = useContext(AuthContext);

    useEffect(() => {

        if(isAuthenticated){
            navigate('/app');
        };

    }, [isAuthenticated, navigate]);

    const services = {
        login:loginRequest,
        create:createAccountRequest
    }[authMode];

    const handleSubmitForm = async(event) => {
        if(!event) return;

        event.preventDefault();

        const payload = Object.fromEntries(new FormData(event.target));
        
        setLoading(true);

        const { response, error } = await services(payload,keepLogged);

        if(error){

            const {data , msg} = error;

            if (data) {
                setFieldErrors(data);
                setErrorMessage(msg);
            }

            setLoading(false);

            return;

        }

        setUser(response?.data?.user);
        setToken(response?.data?.token);

        setLoading(false);
    }

    const saveCredentials = () => {
        setKeepLogged(!keepLogged)
    }

    const handlerAuthType = () => {
        const types = authMode === 'login' ? 'create' : 'login';

        setAuthMode(types)
    }

    const COMPONENT = {
        login:
        (
            <Login
                submit={handleSubmitForm}
                saveCredentials={saveCredentials}
                handlerAuthType={handlerAuthType}
                errors={fieldErrors}
            />
        ),
        create:
        (
            <CreateAcc
                submit={handleSubmitForm}
                saveCredentials={saveCredentials}
                handlerAuthType={handlerAuthType}
                errors={fieldErrors}
            />
        )
    }[authMode]

    return (
       <main 
        className={
            ` 
                Auth 
                ${theme === "dark" && "AuthDark"}
            `}
        >
        
        { errorMessage && <ErrorPopup ErrorMessage={errorMessage}  setErrorMessage={setErrorMessage} />}
   
        { loading && <Loading /> }

        <div className="pre-box" >
            <div className='alocate'>
                <CgDarkMode
                    onClick={toggleTheme}
                    className='bt-theme'
                />
            </div>

            { COMPONENT }
            
            <AuthText type={authMode} />
            
        </div>

       </main>
    );
}

export default AuthLayout;
