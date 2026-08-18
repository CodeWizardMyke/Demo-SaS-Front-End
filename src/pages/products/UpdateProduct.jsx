import ProductSearch from 'components/product/product.search';
import ProductUpdateForm from 'components/product/product.search/productForm';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';

export default function UpdateProduct () {
    const [selectProduct, setSelectProduct] = useState(null)
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const {toggleSideBar} = useContext(WorkspaceContext)

    function closeForm(){
        setSelectProduct(null);
        setToggleUpdate(false);
    }

    function handlerSelectProduct (product) {
        toggleSideBar(true);
        setSelectProduct(product)
    }
    
    return(
        <div className="module-step">
            {
                !toggleUpdate

                    ?<ProductSearch
                        selected={selectProduct}
                        setSelected={handlerSelectProduct}
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