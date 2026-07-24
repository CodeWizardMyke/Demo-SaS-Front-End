import BrandSearchForm from 'components/brand/BrandSearchForm';
import BrandUpdateForm from 'components/brand/BrandUpdateForm';
import React, { useState } from 'react';

const UpdateBrand = () => {
    const [brand, setBrand] = useState(null);
    const [toggleUpdate,setToggleUpdate] = useState(false);

    function closeForm(){
        setBrand(null);
        setToggleUpdate(false);
    }

    return (
        <div className='module-step'>
            {
                !toggleUpdate
                    
                    ? <BrandSearchForm
                        selected={brand}
                        setSelected={setBrand}
                        open={setToggleUpdate}
                        textType={`editar`}
                    />

                    : <BrandUpdateForm
                        selected={brand}
                        setSelected={setBrand}
                        close={closeForm}
                    />
            }
        </div>
    );
}

export default UpdateBrand;
