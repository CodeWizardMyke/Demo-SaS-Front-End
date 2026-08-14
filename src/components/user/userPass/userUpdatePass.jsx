import Button from 'components/buttons/Button';
import Input from 'components/input';
import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import passwordCheck from '../utils/passwordCheck';
import { updateUser } from 'services/user/updateUser';
import { useEffect } from 'react';
import Loading from 'components/loading/Loading';

const UserUpdatePass = () => {
    const [err,setErr] = useState("");
    const [successUpdate,setSuccessUpdate] = useState("")
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading,setLoading] = useState(false);

    const handleUpdatePassword = async () => {
        setErr("");
        setSuccessUpdate("")

        const validationResult = passwordCheck(oldPassword,newPassword,confirmPassword);

        if (!validationResult.success){
            console.log(validationResult.error)
            setErr(validationResult.error)
            return;
        }
        setLoading(true);

        const payload = {
            password:newPassword,
            re_password:confirmPassword,
            currentPassword:oldPassword
        };
        const {data,error} = await updateUser(payload);
        setLoading(false);
        
        if(error){
            const extractError = error.response?.data?.errors?.[0]?.msg
            setErr(extractError || "Error desconhecido.");
        }

        if(data){
            setSuccessUpdate("Atualizado com sucesso!")
        }
    };

    useEffect(()=>{
        setTimeout(() => {
            setSuccessUpdate("")
        }, 8000);
    },[successUpdate]);

    return (
        <div className='profileFormCard'>
            {loading && <Loading/>}

            <div className="header">
                <FiLock />

                <h3>
                    Alterar senha
                </h3>

                <p>
                    Utilize uma senha
                    forte para proteger
                    sua conta.
                </p>
            </div>

            <div>
                <Input
                    type="password"
                    placeholder="Senha atual"
                    query={oldPassword}
                    setQuery={
                        setOldPassword
                    }
                />

                <Input
                    type="password"
                    placeholder="Nova senha"
                    query={newPassword}
                    setQuery={
                        setNewPassword
                    }
                />

                <Input
                    type="password"
                    placeholder="Confirmar senha"
                    query={confirmPassword}
                    setQuery={
                        setConfirmPassword
                    }
                />
            </div>
            
               {
                err && 
                    <div className="md-danger">
                        {err}
                    </div>
            }

            {
                successUpdate && 
                    <div className="md-success">
                        {successUpdate}
                    </div>
            }
            <div className="pfFooter">
                <Button
                    svg={<FiLock />}
                    click={
                        handleUpdatePassword
                    }
                    css={'btn_pf'}
                >
                    Atualizar senha
                </Button>
            </div>
        </div>
    );
}

export default UserUpdatePass;
