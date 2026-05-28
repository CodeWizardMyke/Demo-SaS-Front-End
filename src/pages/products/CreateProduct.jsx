import React, { useContext, useEffect } from 'react';

import { ProductFormProvider, ProductFormContext } from '../../contexts/ProductFormContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import PanelAside from '../../components/PanelAside';
import SearchCategoryOrBrand from '../../components/product/searchCategoryOrBrand';

const CreateProductContent = () => {
    const { activeSideBar } = useContext(WorkspaceContext);
    const { step, dispatch,formData } = useContext(ProductFormContext);

    useEffect(() => {
    console.log(`[FEEDBACK FORM]`,formData);
    }, [formData])

    return (

        <div className="moduleo-content">

            {
                step === 1 && <SearchCategoryOrBrand  type="brand" dispatch={dispatch} />
            }

            {
                step === 2 && <SearchCategoryOrBrand type="category" dispatch={dispatch} />
            }

            {
                activeSideBar && <PanelAside />
            }

        </div>

    );

};

const CreateProduct = () => {

    return (

        <div className="opened-module">

            <ProductFormProvider>

                <CreateProductContent />

            </ProductFormProvider>

        </div>

    );

};

export default CreateProduct;