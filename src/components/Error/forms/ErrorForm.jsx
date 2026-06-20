import React, { useCallback, useContext, useEffect, useMemo } from 'react';

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


    useEffect (() => {

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };

    }, []);


    const handlerNavigateStep = useCallback((step) => {
        dispatch({
            type:"SET_STEP",
            payload:step
        });

        setValidationErrors(null);

    }, [dispatch, setValidationErrors]);

    return (
        <div className='ErrorForm'>
            <div className="errors-form-content ">
                <div className="head">
                    <h1>Falha no cadastro.</h1>
                    <Button text={'fechar'} click={() => setValidationErrors(null)} />
                </div>

                <div className="card-error">
                    <h2>Verifique os {dataErr?.length > 1 ? "dados destas seções." : " dados desta seção."} </h2>
                    <ul className='error-list'>    
                        {
                            dataErr?.map( (error ) => (
                                <li key={error.id}
                                
                                    onClick={() => handlerNavigateStep(error.step)}
                                >
                                    <div>
                                        <div className="modalistErrorHead">
                                            
                                            <h3>{error.svg} {error.title}:</h3>
                                            <h4>Há campos inválidos nesta etapa.</h4>
                                            
                                        </div>
                                        <div className="fields">
                                            <ErrorFieldList  fields={error.fields || []} />
                                            <Button 
                                                text={`Retornar para ${error.title}`} 
                                                click={(e) => {
                                                    e.stopPropagation();
                                                    handlerNavigateStep(error.step);
                                                }}
                                            />
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
