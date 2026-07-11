import ErrorTag from 'components/tags/ErrorTag';
import React from 'react';

const ErrorFieldList = ({fields}) => {
    return (
        <ul className='errors-fields'>
            {
                fields?.map( (field,index) => (

                    <li  key={`Error:${index}`}>
                        <ErrorTag msg={field.label || field } />
                    </li>

                ))
            }
        </ul>
    );
}

export default ErrorFieldList;
