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
import PopupSucess from 'components/popup/PopupSucess';
import ProductDetailPage from 'components/product/product.detail.page';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';

const CreateProductContent = () => {

    const { activeSideBar, toggleSideBar, validationErrors, modalSucess} = useContext(WorkspaceContext);
    const { step, viewProductDetail } = useContext(ProductFormContext);
    const [ modalCreateCategoryBrand, setModalCreateCategoryBrand] = useState(null);

    function toggleCreateForm(type) {

        toggleSideBar(true);
        setModalCreateCategoryBrand(type);

    }

    const STEP_COMPONENTS = {

        1: (
            <CategoryBrandSelector
                type="category"
                createForm={toggleCreateForm}
            />
        ),

        2: (
            <CategoryBrandSelector
                type="brand"
                createForm={toggleCreateForm}
            />
        ),

        3: ( <Informations/> ),

        4: ( <Thumbnails/>  ),

        5: (  <Pricing /> ),

        6: ( <Marketing /> ),
    };

    return (

        <div className="module-content">

            <div className="module-step">

                { validationErrors  && <ErrorForm /> }

                { modalSucess && <PopupSucess /> }

                { viewProductDetail && <ProductDetailPage/> }

                {
                    !viewProductDetail &&  <>
                        {STEP_COMPONENTS[step]}
                        <ButtonPrevNextStep/>
                    </>
                }
                
                
            </div>

            <PanelAside
                modalCreate={modalCreateCategoryBrand} 
                setModalCreate={setModalCreateCategoryBrand}
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