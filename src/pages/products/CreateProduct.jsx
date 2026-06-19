import React, { useContext, useState } from 'react';

import { ProductFormProvider, ProductFormContext } from '../../contexts/ProductFormContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import PanelAside from '../../components/aside';
import Informations from '../../components/product/information';
import Thumbnails from '../../components/product/media/images/Thumbnails';
import Pricing from '../../components/product/pricing';
import Marketing from 'components/product/media/Banners/Marketing';
import CategoryBrandSelector from 'components/product/categoryBrandSelector';
import ErrorForm from 'components/Error/forms/ErrorForm';

const CreateProductContent = () => {

    const { activeSideBar, toggleSideBar, validationErrors} = useContext(WorkspaceContext);
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
            <CategoryBrandSelector
                type="category"
                createForm={toggleCreateForm}
                toggleSideBar={toggleSideBar}
            />
        ),

        2: (
            <CategoryBrandSelector
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
        6: (
            <Marketing
                toggleSideBar={toggleSideBar}
            />
        ),
    };

    return (

        <div className="module-content">
            {
                validationErrors  && <ErrorForm />
            }
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