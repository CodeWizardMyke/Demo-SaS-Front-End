import React, { useContext } from 'react';
import { renderPreview } from './utils/renderPreview';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

import { TbEdit } from "react-icons/tb";
import { matchStep } from './utils/matchStep';

const ResumeItem = ({ dataConfigs }) => {

    const {formData,dispatch, step} = useContext(ProductFormContext)

    const fieldSteped = dataConfigs.fields ? dataConfigs.fields : []

    function goEditStap(item) {
        const resolvedStep = matchStep(item.id)

        dispatch({
            type:"SET_STEP",
            payload: resolvedStep ? resolvedStep : step 
        })
    }

    return (
        <li className='list-content'>
            <div className="title">
                {dataConfigs.svg}
                {dataConfigs.title}
                <TbEdit 
                    className='bt-svg-edit' 
                    onClick={() => goEditStap(dataConfigs) }
                />                
            </div>
            <ul>
                {
                    fieldSteped.map((field,index) => (

                        <li
                            key={`sub-list-ap${index}`}
                            className='sub-list'
                        >
                            <span className='stFirst'>{field.label}:</span>
                            <p>
                               {
                                
                                    renderPreview(field, formData)
                               }
                            </p>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
}

export default ResumeItem;
