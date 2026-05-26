import React, { useContext } from 'react';
import PanelAside from '../../components/PanelAside';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

const CreateProduct = () => {

    const {activeSideBar} = useContext(WorkspaceContext)

    return (
        <div className="opened-module">
            <h2>cria novo produto</h2>
            
            {
                activeSideBar && <PanelAside /> 
            }
        </div>
    );
}

export default CreateProduct;
