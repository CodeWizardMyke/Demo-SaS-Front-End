import PopupSucess from 'components/popup/PopupSucess';
import ProductSearchDelete from 'components/product/product.delete';
import ModalDelete from 'components/product/product.delete/modalDelete';
import { WorkspaceContext } from 'contexts/WorkspaceContext';
import React, { useContext, useState } from 'react';

const DeleteProduct = () => {
    const {modalSucess,setModalSucess} = useContext(WorkspaceContext);
    const [selectProduct, setSelectProduct] = useState(null);

    const [toggleModal,setToggleModal] = useState(false);

    function closeForm(){
        setToggleModal(false);
    }

    function deletedSucess(){
        setSelectProduct(null);
        setToggleModal(false);
        setModalSucess(selectProduct);
        console.log('deletado')
    }

    return (
      <div className='module-content scroll'>
            {
                modalSucess && <PopupSucess  text={`DELETADO Produto: ${selectProduct.title}`} css={'popupDeletedSucess'} />            
            }
            {
                toggleModal
                    
                    ? <ModalDelete data={selectProduct} close={closeForm} sucess={deletedSucess} />
 
                    :<ProductSearchDelete
                        selected={selectProduct}
                        setSelected={setSelectProduct}
                        openModal={setToggleModal}
                    />
            }
        </div>
    );
}

export default DeleteProduct;
