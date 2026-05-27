import React, { useContext } from 'react';
import PanelAside from '../../components/PanelAside';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import SearchCategoryOrBrand from '../../components/product/searchCategoryOrBrand';

const CreateProduct = () => {

    const {activeSideBar} = useContext(WorkspaceContext)

    return (
        <div className="opened-module">

            <div className="moduleo-content">
                <SearchCategoryOrBrand
                    type={"brand"}
                />

            </div>

            {
                activeSideBar && <PanelAside /> 
            }
        </div>
    );
}

export default CreateProduct;
