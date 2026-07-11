import ProductSearch from 'components/product/product.search';
import ProductUpdateForm from 'components/product/product.search/productForm';
import React, { useState } from 'react';

export default function UpdateProduct () {
    const [selectProduct, setSelectProduct] = useState(null)
    const [toggleUpdate, setToggleUpdate] = useState(false);

    function closeForm(){
        setSelectProduct(null);
        setToggleUpdate(false);
    }
    
    return(
        <div className="module-step">
            {
                !toggleUpdate

                    ?<ProductSearch
                        selected={selectProduct}
                        setSelected={setSelectProduct}
                        openForm={setToggleUpdate}
                    />

                    :<ProductUpdateForm
                        selected={selectProduct}
                        closeForm={closeForm}
                />
            }
        </div>

    )
}