import SetedFields from 'components/fields';
import { ProductFormContext } from 'contexts/ProductFormContext';
import React, { useContext } from 'react';

const InformationItemsContent = ({fields, cssC , cssI}) => {
    
    const {errors} = useContext(ProductFormContext);

    return (
        <div className={cssC} >
            {
                fields?.map(( field,index) => {

                    
                const fieldErrors =
                    errors?.[field.name];


                    return (
                        
                        <div 
                            className={cssI}
                            key={`InformationItemsContent_name:${field.name}_id:${index}`}
                        >
                            <label htmlFor={field.name}>{field.label}</label>
                                
                            <SetedFields data={field} />

                           
                             <div className="errors-content">
                                {
                                    fieldErrors?.map( (msg) =>  <span
                                    
                                            key={`Error_${field.name}_${index}`} 
                                            className='field-error'
                                        >
                                            {msg}
                                        </span> 
                                    )
                                }
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
}

export default InformationItemsContent;
