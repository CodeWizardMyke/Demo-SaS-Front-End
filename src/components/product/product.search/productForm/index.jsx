import Button from 'components/buttons/Button';
import ErrorForm from 'components/Error/forms/ErrorForm';
import InspectorPanel from 'components/InspectorPanel/InspectorPanel';
import PopupSucess from 'components/popup/PopupSucess';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';
import CategoryBrandSelector from 'components/product/categoryBrandSelector';
import CreateCategoryOrBrand from 'components/product/createCategoryOrBrand';
import Informations from 'components/product/information';
import Marketing from 'components/product/media/Banners/Marketing';
import Thumbnails from 'components/product/media/images/Thumbnails';
import Pricing from 'components/product/pricing';
import ProductDetailPage from 'components/product/product.detail.page';
import ProductInspector from 'components/product/productInspector/productInspector';
import { ProductFormContext, ProductFormProvider } from 'contexts/ProductFormContext';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useEffect, useState } from 'react';


const ProductUpdateFormContent = ({closeForm,selected}) => {

    const { activeSideBar, toggleSideBar, validationErrors, modalSucess} = useContext(WorkspaceContext);
    const { step, viewProductDetail, dispatch} = useContext(ProductFormContext);
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

    useEffect(()=> {
        dispatch({
            type:"SET_FIELD",
            field:"product_id",
            value:selected.product_id,
        });
    },[selected,dispatch]);


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

            { modalSucess && <PopupSucess text={"Atualização do produto"} /> }

            { viewProductDetail && <ProductDetailPage/> }

            {
                !viewProductDetail &&  <>
                    {STEP_COMPONENTS[step]}
                    <ButtonPrevNextStep formType={'update'}>
                        <Button text={'Fechar atualização'} click={closeForm}/>
                    </ButtonPrevNextStep>
                    
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
