import React from 'react';

const ErrorFieldList = ({fields}) => {
    return (
        <ul>
            {
                fields?.map( (field,index) => (
                    <li 
                        key={`ErrorFieldListID_${index}`}
                    >
                        <span>
                            {
                                field.label
                            }
                        </span>
                    </li>
                ))
            }
        </ul>
    );
}

export default ErrorFieldList;
