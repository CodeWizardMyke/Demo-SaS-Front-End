import React, { useContext, useState } from 'react';
import { renderPreview } from './utils/renderPreview';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

import { TbEdit } from "react-icons/tb";
import { matchStep } from './utils/matchStep';

const ResumeItem = ({ dataConfigs }) => {

    const [activeListId, setActiveListId] = useState(null);

    const {
        formData,
        dispatch, 
        step, 
        handlerToggleProductShow, 
        viewProductDetail,

    } = useContext(ProductFormContext)

    const fieldSteped = dataConfigs.fields ? dataConfigs.fields : [];

    function goEditStap(item) {
        const resolvedStep = matchStep(item.id)

        dispatch({
            type:"SET_STEP",
            payload: resolvedStep ? resolvedStep : step 
        })

        if(viewProductDetail){
            handlerToggleProductShow(false);
        }
    }

    function toggleListActive () {

        if(activeListId){
            setActiveListId(null);
        }else{
            setActiveListId(dataConfigs.id)
        }

    }

    return (
        <li 
            className='list-content'
            onClick={toggleListActive}
        >
            <div className="title">
                {dataConfigs.svg}
                {dataConfigs.title}
                <div 
                    className="bt_svg_edit"
                    onClick={() => goEditStap(dataConfigs) }
                >

                    <TbEdit />

                </div>
            </div>


            {
                activeListId === dataConfigs.id && (
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
                )

            }
        </li>
    );
}

export default ResumeItem;
