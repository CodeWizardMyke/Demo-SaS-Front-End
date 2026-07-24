import React, { useContext, useState } from 'react';
import { WorkspaceContext } from 'contexts/WorkspaceContext';

import BrandDeleteForm from 'components/brand/BrandDeleteForm';
import BrandSearchForm from 'components/brand/BrandSearchForm';

import PopupSucess from 'components/popup/PopupSucess';

const DeleteBrand = () => {
    const [brand, setBrand] = useState(null);
    const [toggle,setToggle] = useState(false);
    const {modalSucess} = useContext(WorkspaceContext);

    let brand_name = brand?.brand_name || ""

    function closeForm(){
        setBrand(null);
        setToggle(false);
    }

    return (
        <div className='module-step'>
            {
                modalSucess && <PopupSucess text={`Deletado com sucesso: ${brand_name}`}/>
            }
            {
                !toggle

                     ? <BrandSearchForm
                        selected={brand}
                        setSelected={setBrand}
                        textType={`excluir`}
                        open={setToggle}
                    />

                    : <BrandDeleteForm
                        selected={brand}
                        setSelected={setBrand}
                        close={closeForm}
                    />
            }
        </div>
    );
}

export default DeleteBrand;
