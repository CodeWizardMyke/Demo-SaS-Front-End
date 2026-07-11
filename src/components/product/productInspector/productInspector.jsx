import React, { useContext } from 'react';

import Button from 'components/buttons/Button';
import ResumeList from './ResumeList';

import './styles.css';

import { ProductFormContext } from 'contexts/ProductFormContext';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

const ProductInspector = () => {

    const {
        handlerToggleProductShow,
        viewProductDetail
    } = useContext(ProductFormContext);

    const {
        toggleSideBar
    } = useContext(WorkspaceContext);

    function toggleShowDetails(){

        handlerToggleProductShow(!viewProductDetail);

        toggleSideBar(false);

    }

    return (

        <div className="aside-product">

            <div className="aside-header">

                <Button
                    css="bt_show_product"
                    click={toggleShowDetails}
                    text={
                        viewProductDetail
                            ? "Fechar visualização"
                            : "Visualizar produto"
                    }
                />

            </div>

            <div className="aside-content scroll">

                <ResumeList/>

            </div>

        </div>

    );

}

export default ProductInspector;