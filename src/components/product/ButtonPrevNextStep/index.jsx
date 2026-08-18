import React, { useContext } from 'react';

import './styles.css';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductFormContext } from 'contexts/ProductFormContext';

import Button from 'components/buttons/Button';
import useProductCreate from '../hooks/useProductCreate';
import useProductUpdate from '../hooks/useProductUpdate';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

const ButtonPrevNextStep = ({css,formType ,children}) => {
    const {step, totalSteps, dispatch } = useContext(ProductFormContext);
    const { activeSideBar, toggleSideBar, } = useContext(WorkspaceContext);

    const {sendCreate} = useProductCreate();
    const {sendUpdate} = useProductUpdate();

    const handlerPrev =() =>{
        if(step > 1){
            dispatch({type:"PREV_STEP"});
        }
    }

    const handlerNext =() =>{
        if(step < totalSteps){
            dispatch({type:"NEXT_STEP"});
        }
    }

    const handlerFormType = () => {
        if(formType && formType === 'update'){
            sendUpdate()
        }

        if(!formType || formType === "create"){
            sendCreate()
        }
    }

    const textButtonSendForm = formType ? "Atualizar produto." : "Cadastrar produto." 

    function openSideBar(){
        if(activeSideBar){
            toggleSideBar(false);
        }else{
            toggleSideBar(true);
        }
    }
    
    return (
      <>
         <div className={`container_button_navigation_steps acressWidth ${ activeSideBar ? "active" : ""}`}>
         <div className={`content-button-pvn ${css}` }>
            <button 
                type="button"
                onClick={handlerPrev}
                disabled={ step === 1 }
            >
                <FaArrowLeftLong/>
                <span>Voltar</span>
            </button>
            <Button
                text={activeSideBar ? "Fechar etapas" : "Mostrar etapas"}
                click={openSideBar}
            />


            {
                step === totalSteps 
                    
                    ?<>
                        <Button text={textButtonSendForm} click={handlerFormType} />
                    </>

                    :<>
                        <Button text={'Avançar'} click={handlerNext} svg={ <FaArrowRightLong/> } />
                    </>
            }
            {children}
        
        </div>
       </div>
      </>
    );
}

export default ButtonPrevNextStep;
