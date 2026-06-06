import React, { useContext, useState } from 'react';

import "../styles.css";
import ListedImages from '../Shared/ListedImages';
import CurrentImage from '../Shared/CurrentImage';

import { ProductFormContext } from '../../../../contexts/ProductFormContext';

const Thumbnails = ({toggleSideBar}) => {
    const {dispatch, step, formData} = useContext(ProductFormContext);

    const [current, setCurrent] = useState(
        formData?.thumbnails ? formData.thumbnails[0] : null
    );

    function confirmStep(){
        toggleSideBar(true);

        if(formData.thumbnails.length){
            dispatch({type:"COMPLETE_STEP", payload: step, });
            dispatch({type:"NEXT_STEP", payload: step, });
        }
    }

    return (
        <div className='scob-content'>
            <div className="scob-media">
                <ListedImages 
                    thumbnails={formData.thumbnails} 

                    step={step}
                    dispatch={dispatch}

                    setCurrent={setCurrent} 
                    current={current} 

                />
                <CurrentImage data={current} />
            </div>
            <button
                type='button'
                className={`button-confirm ${!formData.thumbnails.length && "bt-disabled"}`}
                onClick={() => confirmStep()}
            >
               { 
                formData.thumbnails.length 
                    ? "confirmar"
                    : "selecione uma imagem"
               }
            </button>
        </div>
    );
}

export default Thumbnails;
