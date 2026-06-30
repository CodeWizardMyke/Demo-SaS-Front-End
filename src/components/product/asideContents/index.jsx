import React, { useContext } from 'react';
import ResumeList from './ResumeList';

import './styles.css'
import Button from 'components/buttons/Button';
import { ProductFormContext } from 'contexts/ProductFormContext';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

const AsideProduct = () => {

    const {handlerToggleProductShow,viewProductDetail} = useContext(ProductFormContext);
    const {toggleSideBar} = useContext(WorkspaceContext);

    const toggleShowDetails = () =>{
        handlerToggleProductShow(!viewProductDetail)
        toggleSideBar(false)
    }

    return (
        <>

            <Button 
                text={
                        viewProductDetail 
                            ? "fechar visualização" 
                            : "visualizar produto"
                    }
                click={toggleShowDetails} 
                css={'bt_show_product'}
                    
            />
            <ResumeList />
            
        </>
    );
}

export default AsideProduct;
