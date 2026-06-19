import React, { useContext, useMemo } from 'react';

import './ErrorForm.css'
import Button from 'components/buttons/Button';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import findErrorStep from './utils/findErrorStep';
import ErrorFieldList from './ErrorFieldList';
import { ProductFormContext } from 'contexts/ProductFormContext';

const ErrorForm = () => {
    const { validationErrors, setValidationErrors,} = useContext(WorkspaceContext);
    const {dispatch} = useContext(ProductFormContext);

    const dataErr = useMemo(()=>{
        if(!validationErrors) return null;

        return findErrorStep(validationErrors)
    },[validationErrors])

    const handlerNavigateStep = (step) => {
        dispatch({
            type:"SET_STEP",
            payload:step
        })
        setValidationErrors(null);
    }

    return (
        <div className='ErrorForm'>
            <div className="errors-form-content">
                <div className="head">
                    <h1>Falha no cadastro.</h1>
                    <Button text={'fechar'} click={() => setValidationErrors(null)} />
                </div>

                <div className="">
                    <h2>Verifique os {dataErr.length > 1 ? "dados destas seções." : " dados desta seção."} </h2>
                    <ul className='error-list'>    
                        {
                            dataErr?.map( (error,index) => (
                                <li key={error.id}>
                                    <div>
                                        <div className="modalistErrorHead">
                                            <h3>{error.title}:</h3>
                                            <h4>Há campos inválidos nesta etapa.</h4>
                                        </div>
                                        <div className="fields">
                                            <ErrorFieldList  fields={error.fields || []} />
                                            <Button text={`Ir para ${error.title}`} click={() => handlerNavigateStep(error.step)} />
                                        </div>
                                    </div>
                                </li>
                            ) )
                        }
                       
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ErrorForm;
