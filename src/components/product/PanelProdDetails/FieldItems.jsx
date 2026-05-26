import React from 'react';
import { renderPreview } from './renderPreview';

const FieldItems = ({dataConfigs,dataForm}) => {

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
                                renderPreview(field, dataForm)
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
