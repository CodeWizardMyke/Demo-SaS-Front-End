import React from 'react';
import '../form.css'

const FormUserAuth = (
    {
        erros,
        setAuthMode,authMode,
        keepLogged, setKeepLogged,
        submitForm
    }
) => {


    function handdlerAuthMode(){
        if(authMode === "login"){
            setAuthMode("create")
        }else{
            setAuthMode("login")
        }
    }

    return (
        <div className='form-auth-content'>
            <div className="form-title">
                <h2>
                    {authMode === "login" ? "Fazer login" : "Criar uma nova conta" }
                </h2>
            </div>
            <form
                onSubmit={submitForm}
            >
                <div className="form-auth-field">
                    <label htmlFor="email">Email</label>
                    <input type="email"  name='email' id='email' />
                    <div className="response-field">
                        { 
                            erros.map( e => e.path === "email" && <p>{e.msg}</p> )
                        }
                    </div>
                </div>
                {
                    authMode === "create" && (
                        <div className="form-auth-field">
                            <label htmlFor="name">Nome e sobrenome  </label>
                            <input type="text"  name='name' id='name' />
                            <div className="response-field">
                                { 
                                    erros.map( e => e.path === "name" && e.msg )
                                }
                            </div>
                        </div>
                    )
                }
                <div className="form-auth-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password"  name='password' id='password' />
                    <div className="response-field">
                        { 
                            erros.map( e => e.path === "password" && e.msg )
                        }
                    </div>
                    <div className="check-box-save">
                    {
                        authMode === "login" && (
                            <>
                                <label htmlFor="save">Me manter conectado</label>
                                <input 
                                    type="checkbox" id='save'
                                    onChange={()=> setKeepLogged(!keepLogged)}
                                 />
                            </>
                        ) 
                    }
                </div>
                </div>
                
                <div className="form-bt-action">
                    <button type='submit'>
                        { authMode === "login" ? "Entrar" : "Cadastrar-me"}
                    </button>
                </div>
            </form>

            <div className="switch-auth-form">
                <span>
                    { authMode === "login" ? "Já tenho uma conta?" : "Não tenho uma conta?"}
                </span>
                <strong
                    onClick={() => handdlerAuthMode()}
                >
                    {authMode === "login" ? "Criar conta" : "Fazer Login" }
                </strong>
            </div>
        </div>
    );
}

export default FormUserAuth;
