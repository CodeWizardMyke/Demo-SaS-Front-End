import React, { useContext, useState } from 'react';

import './styles.css'
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { brandCreateService } from '../../../services/brandCreateService';
import { categoryCreateService } from '../../../services/categoryCreateService';
import { ProductFormContext } from '../../../contexts/ProductFormContext';
import { handdlerErrors } from './utils/handdlerErrors';
import { confirmStep } from '../utils/confirmStep';

const CreateCategoryOrBrand = ({activeCreateForm,createForm}) => {
    const [query,setQuery] = useState("");
    const [errMsg,setErrMsg] = useState(null);
    
    const {loading,setLoading} = useContext(WorkspaceContext);
    const {dispatch, step} = useContext(ProductFormContext)

    const entityLabel  = activeCreateForm === "category" 
        ? "categoria" 
        : "marca";

    async function submitFormCreate(event) {
        event.preventDefault();

        if (!query.trim()) {

            setErrMsg(
                `Informe o nome da ${entityLabel}`
            );

            return;

        }

        setLoading(true);

        const service = activeCreateForm === "brand"
            ? brandCreateService
            : categoryCreateService;
        
        const {data,error} = await service(query);

        const errorsResult = handdlerErrors(error);

        if(errorsResult){
            setLoading(false);
            setErrMsg(errorsResult);

            return;
        };
  
        confirmStep( data.data, activeCreateForm, step, dispatch );
        
        dispatch({
            type:"NEXT_STEP"
        });

        closeForm();
    };

    function closeForm() {
        setLoading(false);

        createForm("close");
    };
    
    return (
        <div className='create-categorybrand'>
            <div className='close-form-content'>
                <button
                    onClick={closeForm}
                    type='button'
                >
                    Fechar
                </button>
            </div>

            <h2>Cadastro de nova {entityLabel}</h2>

          <form onSubmit={submitFormCreate}>
                <div className="form-input-content">
                    <input 
                        type="text" 
                        placeholder={`Informe o nome da nova ${entityLabel}...`}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <span className="errs">
                        {errMsg? errMsg : ""}
                    </span>
                </div>

                <button type='submit' className='bt-create' >
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
          </form>
        </div>
    );
}

export default CreateCategoryOrBrand;
