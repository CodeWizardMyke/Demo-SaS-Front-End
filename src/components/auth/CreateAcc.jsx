import Button from 'components/buttons/Button';
import React from 'react';
import './styles.css';

const CreateAcc = ({submit, saveCredentials, handlerAuthType ,errors = [] }) => {
    return (
        <form
            onSubmit={submit}
            className='form-auth-content'
        >

            <h1>Criar uma nova conta</h1>

            <div className="input-content">
                    
                <div className="auth-input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"name='email' id='email' placeholder='Email@email.com'/>
                    <div className='auth-error'>
                        {
                            errors.map((element,index) => {
                                if(element.path === "email"){
                                    return(
                                        <span key={index}>
                                            {element.msg || "Erro desconhecido."}
                                        </span>
                                    )
                                }
                                return "";
                            } )
                        }
                    </div>
                </div>

                <div className="auth-input-group">
                    <label htmlFor="name">Nome e sobrenome:</label>
                    <input type="name" name='name' id='name' placeholder='Fulano da silva'/>
                    <div className='auth-error'>
                        {
                            errors.map((element,index) => {
                                if(element.path === "name"){
                                    return(
                                        <span key={index}>
                                            {element.msg || "Erro desconhecido."}
                                        </span>
                                    )
                                }
                                return "";
                            } )
                        }
                    </div>
                </div>

                <div className="auth-input-group">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' id='password' placeholder=''/>
                    <div className='auth-error'>
                        {
                            errors.map((element,index) => {
                                if(element.path === "password"){
                                    return(
                                        <span key={index}>
                                            {element.msg || "Erro desconhecido."}
                                        </span>
                                    )
                                }
                                return "";
                            } )
                        }
                    </div>
                </div>

                <div className="check-box-save">
                    <label htmlFor="save">Me manter conectado</label>
                    
                    <input 
                        
                        type="checkbox" 
                        
                        id='save'
                        
                        onChange={saveCredentials}
                        
                    />
                    
                </div>

            </div>

            
            <Button 
                text={'Criar conta.'} 
                type={'submit'}
                css={'bt-action'}
            />

           <div className="toggle-form">
                <Button 
                    text={'Já tenho uma conta?'}
                    click={handlerAuthType}
                />
            </div>



        </form>
    );
}

export default CreateAcc;
