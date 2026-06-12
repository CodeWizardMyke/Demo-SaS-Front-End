import SetedFields from 'components/fields';
import React from 'react';

const InformationItemsContent = ({fields, cssC , cssI}) => {
    
    return (
        <div className={cssC} >
            {
                fields?.map(( field,index) => {

                    return (
                        
                        <div 
                            className={cssI}
                            key={`InformationItemsContent_name:${field.name}_id:${index}`}
                        >
                            <label 
                                htmlFor={field.name}
                            >
                            
                                {field.label}
                            
                            </label>
                            
                                
                            <SetedFields data={field} />

                            
                        </div>

                    )
                })
            }
        </div>
    );
}

export default InformationItemsContent;
