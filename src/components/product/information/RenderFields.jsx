import ErrorFieldList from 'components/Error/forms/ErrorFieldList';
import SetedFields from 'components/fields';
import { ProductFormContext } from 'contexts/ProductFormContext';
import React, { useContext } from 'react';

const RenderFields = ({ data }) => {
    const {errors} = useContext(ProductFormContext)
    const fields = data.fields ? data.fields : []  ;

    return (
        fields.map((field,index) => {
            const error = errors?.[field.name]

            return(
                <div key={`idR:${index}`}>
                    
                    <label htmlFor={field.name}>
                        {field.label}
                    </label>
                    
                    <SetedFields data={field}  />

                    {error && <ErrorFieldList fields={error} />}

                </div>
            )
        })
    );
}

export default RenderFields;
