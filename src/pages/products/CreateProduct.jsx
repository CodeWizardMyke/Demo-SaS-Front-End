import React, { useContext, useState } from 'react';

import { ProductFormProvider, ProductFormContext } from '../../contexts/ProductFormContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

import Informations from '../../components/product/information';
import Thumbnails from '../../components/product/media/images/Thumbnails';
import Pricing from '../../components/product/pricing';
import Marketing from 'components/product/media/Banners/Marketing';
import CategoryBrandSelector from 'components/product/categoryBrandSelector';
import ErrorForm from 'components/Error/forms/ErrorForm';
import PopupSucess from 'components/popup/PopupSucess';
import ProductDetailPage from 'components/product/product.detail.page';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';
import InspectorPanel from 'components/InspectorPanel/InspectorPanel';
import ProductInspector from 'components/product/productInspector/productInspector';
import CreateCategoryOrBrand from 'components/product/createCategoryOrBrand';

const CreateProductContent = () => {

    const { activeSideBar, toggleSideBar, validationErrors, modalSucess} = useContext(WorkspaceContext);
    const { step, viewProductDetail } = useContext(ProductFormContext);
    const [ modalCreateCategoryBrand, setModalCreateCategoryBrand] = useState(null);

    function toggleCreateForm(type) {

        setModalCreateCategoryBrand(type);
        
        if(activeSideBar){
            toggleSideBar();
        }

        if(modalCreateCategoryBrand){
            setModalCreateCategoryBrand(null)
        }

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
            
            <InspectorPanel active={activeSideBar}> 
                {
                    modalCreateCategoryBrand 
                        
                        ? <CreateCategoryOrBrand 
                            modalCreate={modalCreateCategoryBrand} 
                            setModalCreate={setModalCreateCategoryBrand} 
                        />

                        : <ProductInspector />
                }
            </InspectorPanel>
        </div>
    );

};

const CreateProduct = () => {

    return (

        <ProductFormProvider>

            <CreateProductContent />

        </ProductFormProvider>


    );

};

export default CreateProduct;