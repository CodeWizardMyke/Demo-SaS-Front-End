import React, { useContext } from 'react';
import { renderPreview } from './renderPreview';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

const FieldItems = ({dataConfigs}) => {

    const {formData} = useContext(ProductFormContext)

    const fieldSteped = dataConfigs.fields ? dataConfigs.fields : []

    return (
        <li>
            <div className="step-name">
                {dataConfigs.title}
            </div>
            <ul>
                {
                    fieldSteped.map((field,index) => (

                        <li
                            key={`fieldSteped${index}`}
                            className='fieldSteped-values'
                        >
                            <span className='stFirst'>{field.label}</span>
                            <span>
                               {
                                
                                    renderPreview(field, formData)
                               }
                            </span>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
}

export default FieldItems;
