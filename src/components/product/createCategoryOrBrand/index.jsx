import React, { useContext, useState } from 'react';

import './styles.css'
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { brandCreateService } from '../../../services/brandCreateService';
import { categoryCreateService } from '../../../services/categoryCreateService';
import { ProductFormContext } from '../../../contexts/ProductFormContext';
import { handdlerErrors } from './utils/handdlerErrors';
import { confirmStep } from '../utils/confirmStep';
import Button from 'components/buttons/Button';

const CreateCategoryOrBrand = ({modalCreate,setModalCreate}) => {
    const [query,setQuery] = useState("");
    const [errMsg,setErrMsg] = useState(null);
    const {dispatch, step} = useContext(ProductFormContext)

    const {
        loading,
        setLoading,
        setModalSucess,
    } = useContext(WorkspaceContext);

    const service = {
        brand:{
            api:brandCreateService,
            label:"Marca"
        },
        category:{
            api:categoryCreateService,
            label:"Categoria"
        }
    }[modalCreate];

    async function sendCreate() {
        setLoading(true);

        if (!query.trim()) {

            setErrMsg(`Nome da ${service.label} não foi inserido.`);

            return;
        }

        const {data,error} = await service.api(query);

        const errorsResult = handdlerErrors(error);

        if(!!errorsResult){
            setLoading(false);
            setErrMsg(errorsResult);

            return;
        };
  
        confirmStep( data?.data, modalCreate, step, dispatch );

        setModalSucess(data);

        setLoading(false);
        
        setModalCreate(null);
    };

    
    return (
        <div className='p-card create-entity-bc'>
            <div className='card-title'>
               
                <div className="title">
                    
                    <h2>Cadastro</h2>
                    <span>Adicionar Nova {service.label}. </span>
                    
                </div>
               
                <Button text={'Fechar'} click={() =>  setModalCreate(null)} />
               
            </div>
          
            <div className="p-card-content">
                <input 
                    type="text" 
                    placeholder={`Informe o nome da nova ${service.label}...`}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <span className="field-error">
                    {errMsg}
                </span>
            </div>

            <Button text={ loading ? "Cadastrando..." : "Cadastrar"}  click={sendCreate}/>
        </div>
    );
}

export default CreateCategoryOrBrand;
