import PanelAside from 'components/aside';
import Button from 'components/buttons/Button';
import ErrorForm from 'components/Error/forms/ErrorForm';
import PopupSucess from 'components/popup/PopupSucess';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';
import CategoryBrandSelector from 'components/product/categoryBrandSelector';
import Informations from 'components/product/information';
import Marketing from 'components/product/media/Banners/Marketing';
import Thumbnails from 'components/product/media/images/Thumbnails';
import Pricing from 'components/product/pricing';
import ProductDetailPage from 'components/product/product.detail.page';
import { ProductFormContext, ProductFormProvider } from 'contexts/ProductFormContext';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';


const ProductUpdateFormContent = ({closeForm}) => {

    const { activeSideBar, toggleSideBar, validationErrors, modalSucess} = useContext(WorkspaceContext);
    const { step, viewProductDetail} = useContext(ProductFormContext);
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
        <div className='module-content'>
            <div className="module-step">

                { validationErrors  && <ErrorForm /> }

                { modalSucess && <PopupSucess /> }

                { viewProductDetail && <ProductDetailPage/> }

                {
                    !viewProductDetail &&  <>
                        {STEP_COMPONENTS[step]}
                        <ButtonPrevNextStep formType={'update'}>
                            <Button text={'Fechar atualização'} click={closeForm}/>
                        </ButtonPrevNextStep>
                        
                    </>
                }
                
            </div>

            <PanelAside
                modalCreate={modalCreateCategoryBrand} 
                setModalCreate={setModalCreateCategoryBrand}
                activeSideBar={activeSideBar}
            />
        </div>
    )

}

const ProductUpdateForm = ({selected,closeForm}) => {
    return (
        <ProductFormProvider initialData={selected}>

            <ProductUpdateFormContent 
                selected={selected}
                closeForm={closeForm} 
            />

        </ProductFormProvider>
    );
}


export default ProductUpdateForm;
