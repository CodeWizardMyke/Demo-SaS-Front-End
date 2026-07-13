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

            <Button
                css="bt_show_product"
                click={toggleShowDetails}
                text={
                    viewProductDetail
                        ? "Fechar visualização"
                        : "Visualizar produto"
                }
            />

            <div className="aside-header">
            
                <h3>Etapas de Formulário</h3>

                <span>
                    clique em cima de uma etapa para exibir mais detalhes ou  clique em edição para ir direto para o formulário.
                </span>
                
            </div>

            <ResumeList/>

        </div>

    );

}

export default ProductInspector;