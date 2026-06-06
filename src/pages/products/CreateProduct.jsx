import React, { useContext, useState } from 'react';

import { ProductFormProvider, ProductFormContext } from '../../contexts/ProductFormContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import PanelAside from '../../components/PanelAside';
import SearchCategoryOrBrand from '../../components/product/searchCategoryOrBrand';
import Informations from '../../components/product/information';
import Thumbnails from '../../components/product/media/thumbnails';
import Pricing from '../../components/product/pricing';

const CreateProductContent = () => {
    const { activeSideBar, toggleSideBar } = useContext(WorkspaceContext);
    const { step } = useContext(ProductFormContext);
    const [ activeCreateForm, setActiveCreateForm] = useState(null);

    function toggleCreateForm(type) {

        if(type.action === "close") {
            setActiveCreateForm(null);
            return;
        }

        if(type.action && activeSideBar){
            setActiveCreateForm(type);
        }

        if(type.action && !activeSideBar){
            toggleSideBar()            
            setActiveCreateForm(type);
        }

    }

    const STEP_COMPONENTS = {

        1: (
            <SearchCategoryOrBrand
                type="category"
                createForm={toggleCreateForm}
                toggleSideBar={toggleSideBar}
            />
        ),

        2: (
            <SearchCategoryOrBrand
                type="brand"
                createForm={toggleCreateForm}
                toggleSideBar={toggleSideBar}
            />
        ),

        3: (
            <Informations
                toggleSideBar={toggleSideBar}
            />
        ),

        4: (
            <Thumbnails
                toggleSideBar={toggleSideBar}
            />
        ),

        5: (
            <Pricing
                toggleSideBar={toggleSideBar}
            />
        ),

    };

    return (

        <div className="module-content">

            <div className="module-step">
                {STEP_COMPONENTS[step]}
            </div>

            <PanelAside
                activeCreateForm={activeCreateForm} 
                createForm={toggleCreateForm}
                activeSideBar={activeSideBar}
            />

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