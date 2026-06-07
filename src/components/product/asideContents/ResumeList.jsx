import React from 'react';

import productFields from '../../../configs/product'
import FieldItems from './ResumeItem';

const ResumeList = () => {
    return (
        <ul className='aside-list'>
            {
                productFields.map((item,index) => (
                    <FieldItems 
                        dataConfigs={item}
                        key={`aside-list${index}`}
                    />
                ))
            }
        </ul>
    );
}

export default ResumeList;
