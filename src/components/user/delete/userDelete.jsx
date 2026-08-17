import Button from 'components/buttons/Button';
import Input from 'components/input';
import Loading from 'components/loading/Loading';
import { AuthContext } from 'contexts/AuthContext';
import React, { useContext, useState } from 'react';
import { FiDelete, FiLock  } from 'react-icons/fi';
import { deleteAccount } from 'services/user/deleteAccount';

const UserDelete = () => {
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');
    const [loading,setLoading] = useState(false);

    const {logout} = useContext(AuthContext);

    async function handlerDeleteAccount() {
        setErr("");
        
        if(!password.trim()){
            setErr("Informe sua senha para prosseguir com o processo de exclusão.");
            return;
        }
        setLoading(true);

        const {data,error} = await deleteAccount({password});
        
        if(error){
            const extractError = error.response?.data?.errors?.[0]?.msg
            setErr(extractError || "Error desconhecido.");
        }
        setLoading(false);

        if(data){
           logout()
        }
    }

    return (
        <div  className='profileFormCard' >
            {loading && <Loading/> }
            <div className="header">
                <FiDelete />
                <h3>Deletar conta</h3>
                <p>Após a exclusão da conta, ela será removida de forma definitiva do sistema, juntamente com todas as informações anteriormente criadas.</p>
            </div>
            
            <div>

                <Input
                    type="password"
                    placeholder="Informe sua senha."
                    query={password}
                    setQuery={setPassword}
                />

            </div>
            
            { err && 
                <div className="md-danger">
                    {err}
                </div>
            }

            <div className="pfFooter">
                <Button
                    svg={<FiLock />}
                    click={handlerDeleteAccount}
                    css={'btn_pf'}
                >
                    Deletar conta.
                </Button>
            </div>
        </div>
    );
}

export default UserDelete;
