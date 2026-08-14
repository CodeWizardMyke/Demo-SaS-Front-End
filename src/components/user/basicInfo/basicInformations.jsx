import { save } from 'cache/cache';
import Button from 'components/buttons/Button';
import Input from 'components/input';
import Loading from 'components/loading/Loading';
import React, { useEffect, useState } from 'react';
import { FiSave, FiUser } from 'react-icons/fi';
import { updateUser } from 'services/user/updateUser';

const BasicInformations = ({user ,setUser }) => {
    const [name,setName] = useState(user.name || "");

    const [err,setErr] = useState("");
    const [successUpdate,setSuccessUpdate] = useState("");

    const [loading,setLoading] = useState(false);
    
    const updateBasicInfo = async () => {
        setErr("");
        setSuccessUpdate("");

        if(!name.trim()){
            setErr("Nome do usuário deve estár preenchido para fazer uma atualização.");
            return;
        }

        setLoading(true);

        const payload = {name:name}

        const {data,error} = await updateUser(payload);
        setLoading(false);

        if(error){
            const extractError = error.response?.data?.errors?.[0]?.msg
            setErr(extractError || "Error desconhecido.");
        }

        if(data){
            setSuccessUpdate("Atualizado com sucesso!")
            save('user',data);
            setUser(data);
        }

    }

    useEffect(()=>{
        setTimeout(() => {
            setSuccessUpdate("")
        }, 8000);
    },[successUpdate]);

    return (
        <div className='profileFormCard'>
            {loading && <Loading/>}
            <div className="header">
                <FiUser/>
                <h3>Informações pessoais</h3>
                <p>Dados apenas para exibição, alguns elementos não são possíveis de fazer alterações no sistema.</p>
            </div>

            <div className="profile-form">
                <Input 
                    placeholder={"Nome do usuário"}
                    query={name}
                    setQuery={setName}
                />
                <Input 
                    placeholder={"E-mail cadastrado"}
                    query={user?.email}
                    disabled={true}
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
                    css={'btn_pf'}
                    svg={<FiSave/>}
                    click={updateBasicInfo}
                >
                    Salvar Alterações
                </Button>
            </div>
        </div>
    );
}

export default BasicInformations;
