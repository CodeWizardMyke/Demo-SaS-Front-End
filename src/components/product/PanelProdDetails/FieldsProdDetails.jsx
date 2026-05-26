import React from 'react';

import productFields from '../../../configs/product/'
import FieldItems from './FieldItems';

const FieldsProdDetails = () => {
    return (
        <ul className='fieldProdDetailList'>
            {
                productFields.map((item,index) => (
                    <FieldItems 
                        dataConfigs={item}
                        key={`AsidePanelProdField${index}`}
                    />
                ))
            }
        </ul>
    );
}

export default FieldsProdDetails;
